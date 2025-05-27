import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { apiEndpoints } from '../utils/api';
import authService from '../utils/auth';
import { t } from '../utils/i18n';

const Login = ({ onLogin, language }) => {
  const [formData, setFormData] = useState({
    username: '', // FastAPI expects 'username' field for OAuth2PasswordRequestForm
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    console.log('Login attempt with data:', formData);

    try {
      // Šaljemo zahtev za login
      console.log('Šaljem login zahtev...');
      const response = await apiEndpoints.login(formData);
      console.log('Login response:', response.data);
      console.log('Response headers:', response.headers);
      console.log('Response status:', response.status);
      
      // Proveravamo da li imamo sve potrebne podatke u odgovoru
      if (!response.data || !response.data.access_token || !response.data.user) {
 // Check if we have all required data in the response
 console.error('Missing data in response:', response.data);
 toast.error('Incomplete server response');
        return;
      }
      
      const { access_token, user } = response.data;
      console.log('Uspešan login, podaci korisnika:', user);
      
      // Posebna obrada za administratorsku ulogu
      if (user.role === 'admin') {
        console.log('Administratorska uloga detektovana:', user);
        
        console.log('Čuvam admin podatke u localStorage...');
        authService.setAuth(access_token, user);
        
        console.log('Pozivam onLogin za admina...');
        onLogin(user);
        
        console.log('Prikazujem toast poruku za admina...');
        toast.success('Administrator successfully logged in!');
        
        console.log('Postavljam timeout za navigaciju admina...');
        setTimeout(() => {
          console.log('Navigiram admina na dashboard...');
          navigate('/dashboard');
        }, 500);
        
        console.log('Završavam obradu za admina');
        return;
      }
      
      // Store authentication data
      console.log('Čuvam podatke običnog korisnika u localStorage...');
      authService.setAuth(access_token, user);
      console.log('Token i podaci korisnika sačuvani u localStorage');
      
      // Update app state
      console.log('Pozivam onLogin za običnog korisnika...');
      onLogin(user);
      console.log('App state ažuriran sa podacima korisnika');
      
      // Dodajemo timeout da bi se stanje ažuriralo pre navigacije
      console.log('Priprema za navigaciju na dashboard...');
      setTimeout(() => {
        console.log('Prikazujem toast poruku za običnog korisnika...');
        toast.success(t('login_success', language));
        console.log('Navigacija na /dashboard');
        navigate('/dashboard');
      }, 300);
    } catch (error) {
      console.error('Login error:', error);
      console.error('Error details:', error.response?.data);
      console.error('Error status:', error.response?.status);
      console.error('Error headers:', error.response?.headers);
      
      // Detaljnija obrada greške
      let errorMessage = t('invalid_credentials', language);
      if (error.response) {
        if (error.response.status === 401) {
          errorMessage = 'Pogrešan email ili lozinka';
        } else if (error.response.status === 422) {
          errorMessage = 'Neispravan format podataka';
        } else if (error.response.data?.detail) {
          errorMessage = error.response.data.detail;
        }
      } else if (error.request) {
        errorMessage = 'Server nije odgovorio. Proverite internet konekciju.';
      }
      
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="bg-white rounded-lg shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mx-auto h-16 w-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">ExManager</h2>
            <p className="mt-2 text-gray-600">{t('welcome', language)}</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                {t('email', language)}
              </label>
              <input
                id="username"
                name="username"
                type="email"
                autoComplete="email"
                required
                value={formData.username}
                onChange={handleChange}
                className="input-field"
                placeholder={t('email', language)}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                {t('password', language)}
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="input-field"
                placeholder={t('password', language)}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary flex justify-center items-center py-3"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {t('loading', language)}
                </>
              ) : (
                t('login', language)
              )}
            </button>
          </form>

          {/* Register Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200"
              >
                {t('register', language)}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
