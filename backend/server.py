from fastapi import FastAPI, Depends, HTTPException, UploadFile, File, status, Form
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from motor.motor_asyncio import AsyncIOMotorClient
from typing import List, Optional, Annotated
from datetime import datetime, timedelta
from jose import JWTError, jwt
from passlib.context import CryptContext
from pydantic import BaseModel, EmailStr, Field
from bson import ObjectId
import os
from dotenv import load_dotenv
import aiofiles
import uuid
from google.cloud import vision
import io
from PIL import Image
import re
from langdetect import detect

load_dotenv()

app = FastAPI(title="SME Expense Management API", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify exact origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database setup
MONGO_URL = os.getenv("MONGO_URL", "mongodb://localhost:27017")
DATABASE_NAME = os.getenv("DATABASE_NAME", "expense_management")
client = AsyncIOMotorClient(MONGO_URL)
db = client[DATABASE_NAME]

# Security
SECRET_KEY = os.getenv("SECRET_KEY", "your-secret-key-here")
ALGORITHM = os.getenv("ALGORITHM", "HS256")
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", "30"))

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/auth/token")

# OCR Setup
if os.getenv("GOOGLE_APPLICATION_CREDENTIALS"):
    vision_client = vision.ImageAnnotatorClient()
else:
    vision_client = None

# Pydantic Models
class UserBase(BaseModel):
    email: EmailStr
    first_name: str
    last_name: str
    role: str = "employee"  # employee, manager, finance, admin
    language: str = "en"  # en, sr

class UserCreate(UserBase):
    password: str

class UserInDB(UserBase):
    id: str
    is_active: bool = True
    created_at: datetime
    
class User(UserBase):
    id: str
    is_active: bool
    created_at: datetime

class Token(BaseModel):
    access_token: str
    token_type: str
    user: User

class ExpenseBase(BaseModel):
    title: str
    description: Optional[str] = None
    amount: float
    currency: str = "EUR"
    category: str
    date: datetime
    receipt_url: Optional[str] = None
    
class ExpenseCreate(ExpenseBase):
    pass

class Expense(ExpenseBase):
    id: str
    user_id: str
    status: str = "pending"  # pending, approved, rejected
    created_at: datetime
    updated_at: datetime
    ocr_data: Optional[dict] = None

class CategoryBase(BaseModel):
    name: str
    description: Optional[str] = None

class Category(CategoryBase):
    id: str
    created_at: datetime

class ApprovalBase(BaseModel):
    expense_id: str
    status: str  # approved, rejected
    comment: Optional[str] = None

class Approval(ApprovalBase):
    id: str
    approver_id: str
    created_at: datetime

# Utility Functions
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
    
    user_doc = await db.users.find_one({"email": email})
    if user_doc is None:
        raise credentials_exception
    
    user_doc["id"] = str(user_doc["_id"])
    del user_doc["_id"]
    del user_doc["hashed_password"]
    return User(**user_doc)

async def process_receipt_ocr(file: UploadFile) -> dict:
    """Process receipt using Google Vision API OCR"""
    if not vision_client:
        return {"error": "OCR service not configured"}
    
    try:
        content = await file.read()
        image = vision.Image(content=content)
        
        # Perform OCR
        response = vision_client.text_detection(image=image)
        texts = response.text_annotations
        
        if not texts:
            return {"error": "No text detected in image"}
        
        full_text = texts[0].description
        
        # Extract key information using regex patterns
        amount_pattern = r'[\d,]+\.?\d*\s*(?:EUR|€|RSD|din|дин)'
        date_pattern = r'\d{1,2}[/.]\d{1,2}[/.]\d{2,4}'
        
        amounts = re.findall(amount_pattern, full_text, re.IGNORECASE)
        dates = re.findall(date_pattern, full_text)
        
        # Detect language
        try:
            language = detect(full_text)
        except:
            language = "en"
        
        return {
            "full_text": full_text,
            "detected_amounts": amounts,
            "detected_dates": dates,
            "language": language,
            "confidence": len(texts[0].description) / 100  # Simple confidence metric
        }
        
    except Exception as e:
        return {"error": f"OCR processing failed: {str(e)}"}

# API Routes
@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.utcnow()}

# Authentication Routes
@app.post("/api/auth/register", response_model=User)
async def register(user: UserCreate):
    # Check if user exists
    existing_user = await db.users.find_one({"email": user.email})
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    # Hash password and save user
    hashed_password = get_password_hash(user.password)
    user_doc = {
        "email": user.email,
        "first_name": user.first_name,
        "last_name": user.last_name,
        "role": user.role,
        "language": user.language,
        "hashed_password": hashed_password,
        "is_active": True,
        "created_at": datetime.utcnow()
    }
    
    result = await db.users.insert_one(user_doc)
    user_doc["id"] = str(result.inserted_id)
    del user_doc["_id"]
    del user_doc["hashed_password"]
    
    return User(**user_doc)

@app.post("/api/auth/token", response_model=Token)
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user_doc = await db.users.find_one({"email": form_data.username})
    if not user_doc or not verify_password(form_data.password, user_doc["hashed_password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user_doc["email"]}, expires_delta=access_token_expires
    )
    
    user_doc["id"] = str(user_doc["_id"])
    del user_doc["_id"]
    del user_doc["hashed_password"]
    
    return Token(
        access_token=access_token,
        token_type="bearer",
        user=User(**user_doc)
    )

@app.get("/api/auth/me", response_model=User)
async def get_current_user_info(current_user: User = Depends(get_current_user)):
    return current_user

# Category Routes
@app.get("/api/categories", response_model=List[Category])
async def get_categories(current_user: User = Depends(get_current_user)):
    categories = []
    async for category_doc in db.categories.find():
        category_doc["id"] = str(category_doc["_id"])
        del category_doc["_id"]
        categories.append(Category(**category_doc))
    return categories

@app.post("/api/categories", response_model=Category)
async def create_category(
    category: CategoryBase,
    current_user: User = Depends(get_current_user)
):
    # Only admin and finance can create categories
    if current_user.role not in ["admin", "finance"]:
        raise HTTPException(status_code=403, detail="Insufficient permissions")
    
    category_doc = {
        "name": category.name,
        "description": category.description,
        "created_at": datetime.utcnow()
    }
    
    result = await db.categories.insert_one(category_doc)
    category_doc["id"] = str(result.inserted_id)
    del category_doc["_id"]
    
    return Category(**category_doc)

# Expense Routes
@app.get("/api/expenses", response_model=List[Expense])
async def get_expenses(
    current_user: User = Depends(get_current_user),
    skip: int = 0,
    limit: int = 100
):
    query = {}
    # Regular employees can only see their own expenses
    if current_user.role == "employee":
        query["user_id"] = current_user.id
    
    expenses = []
    cursor = db.expenses.find(query).skip(skip).limit(limit).sort("created_at", -1)
    async for expense_doc in cursor:
        expense_doc["id"] = str(expense_doc["_id"])
        del expense_doc["_id"]
        expenses.append(Expense(**expense_doc))
    
    return expenses

@app.post("/api/expenses", response_model=Expense)
async def create_expense(
    title: str = Form(...),
    description: str = Form(None),
    amount: float = Form(...),
    currency: str = Form("EUR"),
    category: str = Form(...),
    date: str = Form(...),
    file: UploadFile = File(None),
    current_user: User = Depends(get_current_user)
):
    receipt_url = None
    ocr_data = None
    
    # Process uploaded receipt if provided
    if file:
        # Save file
        file_id = str(uuid.uuid4())
        file_extension = file.filename.split('.')[-1] if '.' in file.filename else 'jpg'
        filename = f"{file_id}.{file_extension}"
        filepath = f"/tmp/{filename}"  # In production, use proper storage
        
        async with aiofiles.open(filepath, 'wb') as f:
            content = await file.read()
            await f.write(content)
        
        receipt_url = f"/uploads/{filename}"
        
        # Process OCR
        file.file.seek(0)  # Reset file pointer
        ocr_data = await process_receipt_ocr(file)
    
    # Parse date
    try:
        expense_date = datetime.fromisoformat(date.replace('Z', '+00:00'))
    except:
        expense_date = datetime.utcnow()
    
    expense_doc = {
        "title": title,
        "description": description,
        "amount": amount,
        "currency": currency,
        "category": category,
        "date": expense_date,
        "receipt_url": receipt_url,
        "user_id": current_user.id,
        "status": "pending",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow(),
        "ocr_data": ocr_data
    }
    
    result = await db.expenses.insert_one(expense_doc)
    expense_doc["id"] = str(result.inserted_id)
    del expense_doc["_id"]
    
    return Expense(**expense_doc)

@app.get("/api/expenses/{expense_id}", response_model=Expense)
async def get_expense(expense_id: str, current_user: User = Depends(get_current_user)):
    expense_doc = await db.expenses.find_one({"_id": ObjectId(expense_id)})
    if not expense_doc:
        raise HTTPException(status_code=404, detail="Expense not found")
    
    # Check permissions
    if current_user.role == "employee" and expense_doc["user_id"] != current_user.id:
        raise HTTPException(status_code=403, detail="Access denied")
    
    expense_doc["id"] = str(expense_doc["_id"])
    del expense_doc["_id"]
    return Expense(**expense_doc)

# Approval Routes
@app.post("/api/expenses/{expense_id}/approve")
async def approve_expense(
    expense_id: str,
    approval: ApprovalBase,
    current_user: User = Depends(get_current_user)
):
    # Only managers, finance, and admin can approve
    if current_user.role not in ["manager", "finance", "admin"]:
        raise HTTPException(status_code=403, detail="Insufficient permissions")
    
    # Update expense status
    await db.expenses.update_one(
        {"_id": ObjectId(expense_id)},
        {
            "$set": {
                "status": approval.status,
                "updated_at": datetime.utcnow()
            }
        }
    )
    
    # Create approval record
    approval_doc = {
        "expense_id": expense_id,
        "approver_id": current_user.id,
        "status": approval.status,
        "comment": approval.comment,
        "created_at": datetime.utcnow()
    }
    
    await db.approvals.insert_one(approval_doc)
    
    return {"message": f"Expense {approval.status} successfully"}

# Dashboard Routes
@app.get("/api/dashboard/stats")
async def get_dashboard_stats(current_user: User = Depends(get_current_user)):
    query = {}
    if current_user.role == "employee":
        query["user_id"] = current_user.id
    
    # Get expense statistics
    total_expenses = await db.expenses.count_documents(query)
    pending_expenses = await db.expenses.count_documents({**query, "status": "pending"})
    approved_expenses = await db.expenses.count_documents({**query, "status": "approved"})
    
    # Calculate total amounts
    pipeline = [
        {"$match": query},
        {"$group": {"_id": "$status", "total": {"$sum": "$amount"}}}
    ]
    
    amounts_by_status = {}
    async for doc in db.expenses.aggregate(pipeline):
        amounts_by_status[doc["_id"]] = doc["total"]
    
    return {
        "total_expenses": total_expenses,
        "pending_expenses": pending_expenses,
        "approved_expenses": approved_expenses,
        "total_amount": sum(amounts_by_status.values()),
        "amounts_by_status": amounts_by_status
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
