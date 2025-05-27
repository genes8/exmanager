import requests
import unittest
import json
from datetime import datetime

class ExpenseManagementAPITest(unittest.TestCase):
    def setUp(self):
        self.base_url = "http://localhost:8001/api"
        self.test_user = {
            "email": f"test_user_{datetime.now().strftime('%Y%m%d%H%M%S')}@example.com",
            "password": "Test@123",
            "first_name": "Test",
            "last_name": "User",
            "role": "employee",
            "language": "en"
        }
        self.manager_user = {
            "email": f"test_manager_{datetime.now().strftime('%Y%m%d%H%M%S')}@example.com",
            "password": "Test@123",
            "first_name": "Test",
            "last_name": "Manager",
            "role": "manager",
            "language": "en"
        }
        self.admin_user = {
            "email": f"test_admin_{datetime.now().strftime('%Y%m%d%H%M%S')}@example.com",
            "password": "Test@123",
            "first_name": "Test",
            "last_name": "Admin",
            "role": "admin",
            "language": "en"
        }
        self.token = None
        self.manager_token = None
        self.admin_token = None
        self.expense_id = None

    def test_01_health_check(self):
        """Test the health check endpoint"""
        response = requests.get(f"{self.base_url}/health")
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data["status"], "healthy")
        print("✅ Health check endpoint is working")

    def test_02_register_user(self):
        """Test user registration"""
        response = requests.post(f"{self.base_url}/auth/register", json=self.test_user)
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data["email"], self.test_user["email"])
        self.assertEqual(data["role"], "employee")
        print(f"✅ User registration successful: {data['email']}")

        # Register manager user
        response = requests.post(f"{self.base_url}/auth/register", json=self.manager_user)
        self.assertEqual(response.status_code, 200)
        print(f"✅ Manager registration successful: {self.manager_user['email']}")

        # Register admin user
        response = requests.post(f"{self.base_url}/auth/register", json=self.admin_user)
        self.assertEqual(response.status_code, 200)
        print(f"✅ Admin registration successful: {self.admin_user['email']}")

    def test_03_login(self):
        """Test login functionality"""
        login_data = {
            "username": self.test_user["email"],
            "password": self.test_user["password"]
        }
        response = requests.post(f"{self.base_url}/auth/token", data=login_data)
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertIn("access_token", data)
        self.token = data["access_token"]
        print(f"✅ Login successful for user: {self.test_user['email']}")

        # Login as manager
        login_data = {
            "username": self.manager_user["email"],
            "password": self.manager_user["password"]
        }
        response = requests.post(f"{self.base_url}/auth/token", data=login_data)
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.manager_token = data["access_token"]
        print(f"✅ Login successful for manager: {self.manager_user['email']}")

        # Login as admin
        login_data = {
            "username": self.admin_user["email"],
            "password": self.admin_user["password"]
        }
        response = requests.post(f"{self.base_url}/auth/token", data=login_data)
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.admin_token = data["access_token"]
        print(f"✅ Login successful for admin: {self.admin_user['email']}")

    def test_04_get_current_user(self):
        """Test getting current user info"""
        headers = {"Authorization": f"Bearer {self.token}"}
        response = requests.get(f"{self.base_url}/auth/me", headers=headers)
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data["email"], self.test_user["email"])
        print(f"✅ Get current user info successful: {data['email']}")

    def test_05_get_categories(self):
        """Test getting categories"""
        headers = {"Authorization": f"Bearer {self.token}"}
        response = requests.get(f"{self.base_url}/categories", headers=headers)
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertIsInstance(data, list)
        print(f"✅ Get categories successful, found {len(data)} categories")

    def test_06_create_category(self):
        """Test creating a category (admin only)"""
        headers = {"Authorization": f"Bearer {self.admin_token}"}
        category_data = {
            "name": f"Test Category {datetime.now().strftime('%Y%m%d%H%M%S')}",
            "description": "Test category description"
        }
        response = requests.post(f"{self.base_url}/categories", json=category_data, headers=headers)
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data["name"], category_data["name"])
        print(f"✅ Create category successful: {data['name']}")

        # Test permission restriction (employee can't create category)
        headers = {"Authorization": f"Bearer {self.token}"}
        response = requests.post(f"{self.base_url}/categories", json=category_data, headers=headers)
        self.assertEqual(response.status_code, 403)
        print("✅ Permission restriction for category creation working")

    def test_07_create_expense(self):
        """Test creating an expense"""
        headers = {"Authorization": f"Bearer {self.token}"}
        
        # Get a category first
        response = requests.get(f"{self.base_url}/categories", headers=headers)
        categories = response.json()
        self.assertTrue(len(categories) > 0, "No categories found")
        
        category_id = categories[0]["id"]
        
        # Create expense with multipart form data
        expense_data = {
            "title": f"Test Expense {datetime.now().strftime('%Y%m%d%H%M%S')}",
            "description": "Test expense description",
            "amount": 100.50,
            "currency": "EUR",
            "category": category_id,
            "date": datetime.now().isoformat()
        }
        
        response = requests.post(
            f"{self.base_url}/expenses", 
            data=expense_data,
            headers=headers
        )
        
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data["title"], expense_data["title"])
        self.expense_id = data["id"]
        print(f"✅ Create expense successful: {data['title']} (ID: {self.expense_id})")

    def test_08_get_expenses(self):
        """Test getting expenses"""
        headers = {"Authorization": f"Bearer {self.token}"}
        response = requests.get(f"{self.base_url}/expenses", headers=headers)
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertIsInstance(data, list)
        print(f"✅ Get expenses successful, found {len(data)} expenses")

    def test_09_get_expense_detail(self):
        """Test getting expense detail"""
        if not self.expense_id:
            self.skipTest("No expense created yet")
            
        headers = {"Authorization": f"Bearer {self.token}"}
        response = requests.get(f"{self.base_url}/expenses/{self.expense_id}", headers=headers)
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data["id"], self.expense_id)
        print(f"✅ Get expense detail successful: {data['title']}")

    def test_10_approve_expense(self):
        """Test approving an expense (manager only)"""
        if not self.expense_id:
            self.skipTest("No expense created yet")
            
        headers = {"Authorization": f"Bearer {self.manager_token}"}
        approval_data = {
            "expense_id": self.expense_id,
            "status": "approved",
            "comment": "Approved by automated test"
        }
        response = requests.post(
            f"{self.base_url}/expenses/{self.expense_id}/approve", 
            json=approval_data,
            headers=headers
        )
        self.assertEqual(response.status_code, 200)
        print(f"✅ Approve expense successful for expense ID: {self.expense_id}")

        # Verify expense status changed
        headers = {"Authorization": f"Bearer {self.token}"}
        response = requests.get(f"{self.base_url}/expenses/{self.expense_id}", headers=headers)
        data = response.json()
        self.assertEqual(data["status"], "approved")
        print(f"✅ Expense status successfully changed to: {data['status']}")

    def test_11_get_dashboard_stats(self):
        """Test getting dashboard statistics"""
        headers = {"Authorization": f"Bearer {self.token}"}
        response = requests.get(f"{self.base_url}/dashboard/stats", headers=headers)
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertIn("total_expenses", data)
        self.assertIn("pending_expenses", data)
        self.assertIn("approved_expenses", data)
        print(f"✅ Get dashboard stats successful: {data}")

    def test_12_serbian_language_support(self):
        """Test Serbian language support by creating a user with Serbian language preference"""
        serbian_user = {
            "email": f"test_serbian_{datetime.now().strftime('%Y%m%d%H%M%S')}@example.com",
            "password": "Test@123",
            "first_name": "Serbian",
            "last_name": "User",
            "role": "employee",
            "language": "sr"
        }
        
        # Register Serbian user
        response = requests.post(f"{self.base_url}/auth/register", json=serbian_user)
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data["language"], "sr")
        print(f"✅ Serbian user registration successful: {data['email']}")
        
        # Login as Serbian user
        login_data = {
            "username": serbian_user["email"],
            "password": serbian_user["password"]
        }
        response = requests.post(f"{self.base_url}/auth/token", data=login_data)
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertIn("access_token", data)
        serbian_token = data["access_token"]
        
        # Get user info to verify language
        headers = {"Authorization": f"Bearer {serbian_token}"}
        response = requests.get(f"{self.base_url}/auth/me", headers=headers)
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data["language"], "sr")
        print(f"✅ Serbian language preference verified for user: {data['email']}")

if __name__ == "__main__":
    # Create a test suite
    test_suite = unittest.TestSuite()
    
    # Add tests in order
    test_suite.addTest(ExpenseManagementAPITest('test_01_health_check'))
    test_suite.addTest(ExpenseManagementAPITest('test_02_register_user'))
    test_suite.addTest(ExpenseManagementAPITest('test_03_login'))
    test_suite.addTest(ExpenseManagementAPITest('test_04_get_current_user'))
    test_suite.addTest(ExpenseManagementAPITest('test_05_get_categories'))
    test_suite.addTest(ExpenseManagementAPITest('test_06_create_category'))
    test_suite.addTest(ExpenseManagementAPITest('test_07_create_expense'))
    test_suite.addTest(ExpenseManagementAPITest('test_08_get_expenses'))
    test_suite.addTest(ExpenseManagementAPITest('test_09_get_expense_detail'))
    test_suite.addTest(ExpenseManagementAPITest('test_10_approve_expense'))
    test_suite.addTest(ExpenseManagementAPITest('test_11_get_dashboard_stats'))
    test_suite.addTest(ExpenseManagementAPITest('test_12_serbian_language_support'))
    
    # Run the tests
    runner = unittest.TextTestRunner()
    runner.run(test_suite)
