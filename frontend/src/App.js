import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import ExpenseDetail from './components/ExpenseDetail';
import Categories from './components/Categories';
import Approvals from './components/Approvals';

// Utils
import authService from './utils/auth';
import { getCurrentLanguage } from './utils/i18n';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  return authService.isAuthenticated() ? children : <Navigate to="/login" replace />;
};

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [language, setLanguage] = useState(getCurrentLanguage());

  useEffect(() => {
    // Check if user is authenticated on app load
    if (authService.isAuthenticated()) {
      const userData = authService.getUser();
      setUser(userData);
    }
    setLoading(false);
  }, []);

  const handleLogin = (userData) => {
    console.log('handleLogin pozvan sa podacima:', userData);
    
    // Posebna provera za administratorsku ulogu
    if (userData && userData.role === 'admin') {
      console.log('Administrator se prijavljuje:', userData);
    }
    
    setUser(userData);
    console.log('User state postavljen u App komponenti');
  };

  const handleLogout = () => {
    authService.logout();
    setUser(null);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <Routes>
          <Route 
            path="/login" 
            element={
              authService.isAuthenticated() ? 
                <Navigate to="/dashboard" replace /> : 
                <Login onLogin={handleLogin} language={language} />
            } 
          />
          <Route 
            path="/register" 
            element={
              authService.isAuthenticated() ? 
                <Navigate to="/dashboard" replace /> : 
                <Register language={language} />
            } 
          />
          <Route 
            path="/*" 
            element={
              <ProtectedRoute>
                <div className="flex">
                  {/* Sidebar */}
                  <Sidebar 
                    isOpen={sidebarOpen} 
                    onToggle={toggleSidebar}
                    user={user}
                    language={language}
                  />
                  
                  {/* Main Content */}
                  <div className="flex-1 flex flex-col min-h-screen">
                    <Header 
                      user={user} 
                      onLogout={handleLogout}
                      onToggleSidebar={toggleSidebar}
                      language={language}
                      onLanguageChange={setLanguage}
                    />
                    
                    <main className="flex-1 p-6 bg-gray-50">
                      <Routes>
                        <Route path="/" element={<Navigate to="/dashboard" replace />} />
                        <Route path="/dashboard" element={<Dashboard user={user} language={language} />} />
                        <Route path="/expenses" element={<ExpenseList user={user} language={language} />} />
                        <Route path="/expenses/new" element={<ExpenseForm user={user} language={language} />} />
                        <Route path="/expenses/:id" element={<ExpenseDetail user={user} language={language} />} />
                        <Route path="/categories" element={<Categories user={user} language={language} />} />
                        <Route path="/approvals" element={<Approvals user={user} language={language} />} />
                      </Routes>
                    </main>
                  </div>
                </div>
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
