# Changelog

## 2025-05-28: Authentication Fixes

### Authentication Fixes

The following changes were made to resolve authentication issues, especially for the administrator role:

#### 1. Fixes in `frontend/src/utils/api.js`
- Changed the login request data format from `multipart/form-data` to `application/x-www-form-urlencoded`
- Implemented the proper format for OAuth2 authentication expected by FastAPI

```javascript
login: (credentials) => {
  // FastAPI OAuth2 expects x-www-form-urlencoded format with username and password fields
  const params = new URLSearchParams();
  params.append('username', credentials.username);
  params.append('password', credentials.password);
  
  return api.post('/auth/token', params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
},
```

#### 2. Improvements in `frontend/src/components/Login.js`
- Added more detailed error tracking
- Implemented special handling for the administrator role
- Improved server response handling

#### 3. Improvements in `frontend/src/utils/auth.js`
- Added more detailed tracking for authentication functions
- Improved error handling when reading and storing user data

### Files to Commit

The following files should be committed to git:

```
frontend/src/utils/api.js
frontend/src/components/Login.js
frontend/src/utils/auth.js
frontend/src/App.js
CHANGELOG.md
```

## Environment Setup Notes

### Python Environment

This project requires Python 3.12+ and has been tested with Homebrew Python. If you have multiple Python installations, use the following path for all Python commands:

```bash
/opt/homebrew/opt/python@3.12/libexec/bin/python3
```

### MongoDB Setup

MongoDB must be running for the application to work properly. Install and start MongoDB with:

```bash
# Install MongoDB
brew tap mongodb/brew
brew install mongodb-community

# Start MongoDB service
brew services start mongodb/brew/mongodb-community
```

### Running the Application

1. Start the backend:
```bash
cd backend
/opt/homebrew/opt/python@3.12/libexec/bin/python3 server.py
```

2. Start the frontend:
```bash
cd frontend
npm start
```

3. Access the application at http://localhost:3000
