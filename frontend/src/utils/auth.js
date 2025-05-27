const AUTH_TOKEN_KEY = 'expense_auth_token';
const USER_DATA_KEY = 'expense_user_data';

export const authService = {
  // Store authentication data
  setAuth: (token, user) => {
    console.log('setAuth pozvan sa tokenom i korisnikom:', { token, user });
    try {
      localStorage.setItem(AUTH_TOKEN_KEY, token);
      const userString = JSON.stringify(user);
      console.log('Korisnički podaci za čuvanje:', userString);
      localStorage.setItem(USER_DATA_KEY, userString);
      console.log('Podaci uspešno sačuvani u localStorage');
    } catch (error) {
      console.error('Greška pri čuvanju podataka u localStorage:', error);
    }
  },

  // Get stored token
  getToken: () => {
    return localStorage.getItem(AUTH_TOKEN_KEY);
  },

  // Get stored user data
  getUser: () => {
    console.log('getUser funkcija pozvana');
    try {
      const userData = localStorage.getItem(USER_DATA_KEY);
      console.log('Pročitani podaci iz localStorage:', userData);
      
      if (!userData) {
        console.log('Nema sačuvanih korisničkih podataka');
        return null;
      }
      
      const parsedUser = JSON.parse(userData);
      console.log('Parsirani korisnički podaci:', parsedUser);
      
      // Posebna provera za administratorsku ulogu
      if (parsedUser && parsedUser.role === 'admin') {
        console.log('Pronađen korisnik sa administratorskom ulogom');
      }
      
      return parsedUser;
    } catch (error) {
      console.error('Greška pri čitanju korisničkih podataka:', error);
      return null;
    }
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
