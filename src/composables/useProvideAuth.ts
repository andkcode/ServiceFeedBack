import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';


interface AuthResponse {
    token: string;
    message?: string;
}
export const useProvideAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        refreshAuth();
        axios.interceptors.response.use(
          response => response,
          error => {
            if (error.response?.status === 401) {
              toast.error('401 Unauthorized - Clearing token', { position: 'top-right' });
              setIsAuthenticated(false);
              localStorage.removeItem('auth-token');
            }
            return Promise.reject(error);
          }
        );
      }, []);

    const login = async (us: string, pass: string) => {
        try {
          const response = await axios.post<AuthResponse>('http://localhost:8080/auth/login', {
            username: us,
            password: pass,
          });
        
          if (response.status === 200 && response.data.token) {
            localStorage.setItem('auth-token', response.data.token);
            setIsAuthenticated(true);
            setUsername(us);
            setPassword('');
            toast.success('Login successful', { position: 'bottom-right' });
            setTimeout(() => navigate('/'), 1100);
          } else {
            toast.error('Invalid credentials', { position: 'top-right' });
          }
        } catch (error: any) {
          toast.error('Login error: Incorrect email or password', { position: 'top-right' });
        }
      };

      const register = async (us: string, pass: string) => {
        try {
          const response = await axios.post<AuthResponse>('http://localhost:8080/auth/register', {
            username: us,
            password: pass,
          });
    
          if (response.status === 200 && response.data.token) {
            localStorage.setItem('auth-token', response.data.token);
            setIsAuthenticated(true);
            setUsername(us);
            setPassword('');
            toast.success('Registration successful', { position: 'bottom-right' });
            setTimeout(() => navigate('/'), 1100);
          } else {
            toast.error('Invalid credentials', { position: 'top-right' });
          }
        } catch (error: any) {
          const message = error.response?.data?.message || 'Unknown error';
          setErrorMessage('Registration failed: ' + message);
          toast.error(`Registration failed: ${message}`, { position: 'top-right' });
        }
      };

      const logout = () => {
        localStorage.removeItem('auth-token');
        setIsAuthenticated(false);
        setUsername('');
        setPassword('');
        toast.info('You have been logged out', { position: 'top-left' });
        navigate('/login');
      };

      const refreshAuth = () => {
        const token = localStorage.getItem('auth-token');
        setIsAuthenticated(!!token);
      };

      const getAuthHeader = (contentType = 'application/json') => {
        const token = localStorage.getItem('auth-token');
        if (!token) {
          toast.error('No auth token found in localStorage', { position: 'top-right' });
          return {};
        }
    

        return {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': contentType,
            },
          };
        };
        
return {
    isAuthenticated,
    username,
    password,
    errorMessage,
    login,
    register,
    logout,
    refreshAuth,
    getAuthHeader,
    setUsername,
    setPassword
  };
};