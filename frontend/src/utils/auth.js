const AUTH_TOKEN_KEY = 'expense_auth_token';
const USER_DATA_KEY = 'expense_user_data';

export const authService = {
  // Store authentication data
  setAuth: (token, user) => {
    localStorage.setItem(AUTH_TOKEN_KEY, token);
    localStorage.setItem(USER_DATA_KEY, JSON.stringify(user));
  },

  // Get stored token
  getToken: () => {
    return localStorage.getItem(AUTH_TOKEN_KEY);
  },

  // Get stored user data
  getUser: () => {
    const userData = localStorage.getItem(USER_DATA_KEY);
    return userData ? JSON.parse(userData) : null;
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    const user = localStorage.getItem(USER_DATA_KEY);
    return !!(token && user);
  },

  // Clear authentication data
  logout: () => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(USER_DATA_KEY);
  },

  // Get authorization headers for API calls
  getAuthHeaders: () => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
};

export default authService;
