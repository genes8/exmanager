import axios from 'axios';
import authService from './auth';

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth token
api.interceptors.request.use(
  (config) => {
    const token = authService.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      authService.logout();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// API endpoints
export const apiEndpoints = {
  // Authentication
  login: (credentials) => {
    // FastAPI OAuth2 očekuje x-www-form-urlencoded format sa username i password poljima
    const params = new URLSearchParams();
    params.append('username', credentials.username);
    params.append('password', credentials.password);
    
    return api.post('/auth/token', params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  },
  register: (userData) => api.post('/auth/register', userData),
  getCurrentUser: () => api.get('/auth/me'),

  // Categories
  getCategories: () => api.get('/categories'),
  createCategory: (categoryData) => api.post('/categories', categoryData),

  // Expenses
  getExpenses: (params = {}) => api.get('/expenses', { params }),
  getExpense: (id) => api.get(`/expenses/${id}`),
  createExpense: (formData) => api.post('/expenses', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  approveExpense: (id, approvalData) => api.post(`/expenses/${id}/approve`, approvalData),

  // Dashboard
  getDashboardStats: () => api.get('/dashboard/stats'),

  // Health check
  healthCheck: () => api.get('/health'),
};

export default api;
