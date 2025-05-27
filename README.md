# SME Expense Management Solution 💼

<div align="center">

[![FastAPI](https://img.shields.io/badge/FastAPI-0.104.1-009688.svg?style=flat&logo=FastAPI&logoColor=white)](https://fastapi.tiangolo.com)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB.svg?style=flat&logo=React&logoColor=black)](https://reactjs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.4+-47A248.svg?style=flat&logo=MongoDB&logoColor=white)](https://mongodb.com)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.2.7-38B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

**A comprehensive expense management solution for small and medium enterprises with OCR receipt scanning**

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Usage](#-usage) • [API](#-api-documentation) • [Contributing](#-contributing)

</div>

---

## 🎯 Overview

**ExManager** is a production-ready SME Expense Management Solution designed to streamline business expense tracking, approval workflows, and financial reporting. Built with modern technologies and featuring **OCR-powered receipt scanning**, multi-language support, and role-based access control.

### 🌟 Key Highlights

- 🧾 **OCR Receipt Scanning** - Automatic data extraction from receipts using Google Vision API
- 🌍 **Multi-language Support** - English and Serbian languages
- 👥 **Role-based Access Control** - Employee, Manager, Finance, and Admin roles
- 📊 **Real-time Analytics** - Interactive dashboards with expense insights
- 🔄 **Approval Workflow** - Multi-level expense approval system
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices

---

## ✨ Features

### 🔐 Authentication & Security
- JWT-based authentication system
- Role-based access control (Employee, Manager, Finance, Admin)
- Secure registration and login flows
- Protected routes and API endpoints
- Password encryption with bcrypt

### 🧾 OCR Receipt Processing
- **Google Vision API integration** for receipt text extraction
- **Drag & drop file upload** interface (JPG, PNG, PDF support)
- **Automatic data extraction**: amounts, dates, merchant information
- **Visual feedback**: Processing status and confidence scores
- **Auto-fill forms** with detected data
- **Multi-format support** up to 10MB file size

### 💼 Expense Management
- Complete CRUD operations for expenses
- Advanced filtering by status, category, and date
- Receipt attachment with OCR processing
- Multi-currency support (EUR, RSD, USD)
- Category-based expense organization
- Real-time status tracking (Pending, Approved, Rejected)

### 📊 Dashboard & Analytics
- Interactive charts powered by Chart.js
- Key performance metrics and KPIs
- Recent expense activity feed
- Visual status indicators
- Amount breakdowns by status and category
- Export capabilities for reporting

### 👨‍💼 Approval Workflow
- Multi-level approval system
- Role-based permissions for approvers
- Bulk approval operations
- Approval comments and audit trail
- Quick approve/reject functionality
- Email notifications (configurable)

### 🏷️ Category Management
- Pre-seeded expense categories
- Custom category creation (Admin/Finance only)
- Category-based expense organization
- Category usage analytics

### 🌍 Internationalization
- English and Serbian language support
- Comprehensive UI translations
- Language persistence across sessions
- User-specific language preferences
- RTL support ready

---

## 🏗️ Technical Architecture

### Backend Stack
- **Framework**: FastAPI 0.104.1 with async/await support
- **Database**: MongoDB with Motor async driver
- **Authentication**: JWT tokens with role-based access
- **OCR**: Google Cloud Vision API integration
- **File Storage**: Local storage with cloud migration ready
- **API Documentation**: Auto-generated OpenAPI/Swagger

### Frontend Stack
- **Framework**: React 18.2.0 with modern hooks
- **Routing**: React Router v6
- **Styling**: Tailwind CSS 3.2.7
- **Charts**: Chart.js with React integration
- **File Upload**: React Dropzone
- **HTTP Client**: Axios with interceptors
- **State Management**: React Context + Hooks

### Database Schema
```
📊 Collections:
├── users          # User accounts and profiles
├── expenses       # Expense records with OCR data
├── categories     # Expense categories
├── approvals      # Approval audit trail
└── sessions       # User session management
```

---

## 🚀 Installation

### Prerequisites
- **Node.js** 16+ and npm/yarn
- **Python** 3.8+ with pip
- **MongoDB** 4.4+ (local or cloud)
- **Google Cloud Account** (for OCR functionality)

### 1. Clone Repository
```bash
git clone <your-repository-url>
cd expense-management-solution
```

### 2. Backend Setup
```bash
cd backend

# Install Python dependencies
pip install -r requirements.txt

# Configure environment variables
cp .env.example .env
# Edit .env with your configuration
```

### 3. Frontend Setup
```bash
cd frontend

# Install Node.js dependencies
npm install
# or
yarn install

# Configure environment variables
cp .env.example .env
# Edit .env with backend URL
```

### 4. Database Setup
```bash
# Start MongoDB (if running locally)
mongod

# The application will automatically create collections
# and seed default categories on first run
```

### 5. Google Cloud Vision API Setup (Optional but Recommended)
```bash
# 1. Create Google Cloud Project
# 2. Enable Vision API
# 3. Create Service Account and download JSON key
# 4. Set environment variable
export GOOGLE_APPLICATION_CREDENTIALS="/path/to/your/credentials.json"
```

---

## 🎮 Usage

### Starting the Application

#### Development Mode
```bash
# Terminal 1 - Backend
cd backend
python server.py

# Terminal 2 - Frontend  
cd frontend
npm start
```

#### Production Mode
```bash
# Using supervisor (recommended)
sudo supervisorctl start all
```

### Accessing the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8001
- **API Documentation**: http://localhost:8001/docs

### Default URLs
- **Login**: http://localhost:3000/login
- **Register**: http://localhost:3000/register
- **Dashboard**: http://localhost:3000/dashboard
- **Expenses**: http://localhost:3000/expenses
- **Create Expense**: http://localhost:3000/expenses/new

---

## 👥 User Roles & Permissions

| Role | Permissions |
|------|-------------|
| **Employee** | Create expenses, view own expenses, upload receipts |
| **Manager** | All employee permissions + approve/reject expenses |
| **Finance** | All manager permissions + create categories, view all expenses |
| **Admin** | All permissions + user management, system configuration |

---

## 🔧 Configuration

### Environment Variables

#### Backend (.env)
```env
MONGO_URL=mongodb://localhost:27017
DATABASE_NAME=expense_management
SECRET_KEY=your-secret-key-here
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
GOOGLE_APPLICATION_CREDENTIALS=/path/to/credentials.json
```

#### Frontend (.env)
```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

### OCR Configuration
1. Create Google Cloud Project
2. Enable Vision API
3. Create Service Account
4. Download JSON credentials
5. Set `GOOGLE_APPLICATION_CREDENTIALS` environment variable
6. Restart backend service

**Note**: Without OCR credentials, the application works fully but shows "OCR service not configured" for receipt processing.

---

## 📚 API Documentation

### Authentication Endpoints
```http
POST /api/auth/register    # User registration
POST /api/auth/token       # User login
GET  /api/auth/me          # Current user info
```

### Expense Endpoints
```http
GET    /api/expenses           # List expenses
POST   /api/expenses           # Create expense (with file upload)
GET    /api/expenses/{id}      # Get expense details
POST   /api/expenses/{id}/approve  # Approve/reject expense
```

### Category Endpoints
```http
GET    /api/categories         # List categories
POST   /api/categories         # Create category (Admin/Finance only)
```

### Dashboard Endpoints
```http
GET    /api/dashboard/stats    # Dashboard statistics
```

### Health Check
```http
GET    /api/health            # Service health status
```

Full API documentation available at: http://localhost:8001/docs

---

## 🧪 Testing

### Backend Tests
```bash
cd backend
python -m pytest tests/
```

### Frontend Tests
```bash
cd frontend
npm test
```

### Integration Tests
```bash
# Run the automated test suite
python backend_test.py
```

---

## 📱 Screenshots & Demo

### Login Screen
- Clean, professional authentication interface
- Language selection (English/Serbian)
- Role-based registration

### Dashboard
- Real-time expense statistics
- Interactive charts and graphs
- Recent activity feed
- Quick action buttons

### Expense Creation
- Intuitive form design
- Drag & drop receipt upload
- OCR processing with visual feedback
- Auto-populated fields from OCR data

### Approval Workflow
- Streamlined approval interface
- Bulk operations support
- Comment system for approvers
- Audit trail tracking

---

## 🚀 Deployment

### Using Docker (Recommended)
```bash
# Build and run with Docker Compose
docker-compose up -d
```

### Manual Deployment
```bash
# Backend deployment
cd backend
gunicorn -w 4 -k uvicorn.workers.UvicornWorker server:app

# Frontend deployment
cd frontend
npm run build
# Serve build folder with nginx/apache
```

### Production Checklist
- [ ] Set strong `SECRET_KEY` in production
- [ ] Configure proper CORS origins
- [ ] Set up MongoDB with authentication
- [ ] Configure Google Cloud Vision API
- [ ] Set up SSL/HTTPS
- [ ] Configure backup strategy
- [ ] Set up monitoring and logging

---

## 🤝 Contributing

### Development Setup
1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Code Standards
- **Python**: Follow PEP 8, use Black formatter
- **JavaScript**: Use ESLint + Prettier
- **Git**: Conventional commit messages
- **Testing**: Write tests for new features

### Project Structure
```
📁 Project Root/
├── 📁 backend/              # FastAPI backend
│   ├── server.py           # Main application
│   ├── requirements.txt    # Python dependencies
│   └── .env               # Environment config
├── 📁 frontend/            # React frontend
│   ├── 📁 src/
│   │   ├── 📁 components/  # React components
│   │   ├── 📁 utils/      # Utilities (API, auth, i18n)
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
│   ├── package.json       # Node dependencies
│   └── tailwind.config.js # Tailwind config
├── 📁 docs/               # Documentation
├── 📁 tests/              # Test files
└── README.md              # This file
```

---

## 🐛 Troubleshooting

### Common Issues

**Frontend not loading**
```bash
# Check if backend is running
curl http://localhost:8001/api/health

# Restart services
sudo supervisorctl restart all
```

**OCR not working**
```bash
# Verify Google credentials
echo $GOOGLE_APPLICATION_CREDENTIALS
# Restart backend after setting credentials
sudo supervisorctl restart backend
```

**Database connection issues**
```bash
# Check MongoDB status
sudo systemctl status mongod
# Verify connection string in .env
```

### Support
- 📧 Create an issue for bug reports
- 💬 Join discussions for feature requests
- 📖 Check documentation for setup help

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **FastAPI** - Modern, fast web framework for building APIs
- **React** - JavaScript library for building user interfaces  
- **MongoDB** - NoSQL database for flexible data storage
- **Google Cloud Vision** - OCR and image processing capabilities
- **Tailwind CSS** - Utility-first CSS framework
- **Chart.js** - Simple yet flexible JavaScript charting library

---

<div align="center">

**Built with ❤️ for SME expense management**

[⬆ Back to Top](#sme-expense-management-solution-)

</div>
