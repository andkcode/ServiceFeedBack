import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

interface AuthResponse {
  message?: string;
}

export const useProvideAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:8080/auth/check', {
          withCredentials: true,
        });
        if (response.status === 200) {
          setIsAuthenticated(true);
          localStorage.setItem('username', response.data.username);
        } else {
          setIsAuthenticated(false);
        }
      } catch {
        setIsAuthenticated(false);
      }
    };
  
    checkAuth();
  }, []);

  const login = async (us: string, pass: string) => {
    try {
      const response = await axios.post<AuthResponse>(
        'http://localhost:8080/auth/login',
        { username: us, password: pass },
        { withCredentials: true }
      );

      if (response.status === 200) {
        setIsAuthenticated(true);
        setUsername(us);
        setPassword(pass);
        localStorage.setItem('username', us);
        toast.success('Login successful', { position: 'bottom-right' });
        setTimeout(() => navigate('/'), 1000);
      } else {
        toast.error('Invalid credentials', { position: 'top-right' });
      }
    } catch (error) {
      toast.error('Login error: Incorrect username or password', {
        position: 'top-right',
      });
    }
  };

  const register = async (us: string, pass: string) => {
    try {
      const response = await axios.post<AuthResponse>(
        'http://localhost:8080/auth/register',
        { username: us, password: pass },
        { withCredentials: true }
      );

      if (response.status === 200) {
        setIsAuthenticated(true);
        setUsername(us);
        setPassword(pass);
        localStorage.setItem('username', us);
        toast.success('Registration successful', { position: 'bottom-right' });
      } else {
        toast.error('Registration failed', { position: 'top-right' });
      }
    } catch (error: any) {
      const message = error.response?.data?.message || 'Unknown error';
      setErrorMessage('Registration failed: ' + message);
      toast.error(`Registration failed: ${message}`, { position: 'top-right' });
    }
  };

  const logout = async () => {
    try {
    await axios.post('http://localhost:8080/auth/logout', {}, { withCredentials: true });
    } catch (error) {
      toast.error('Logout error', { position: 'top-right' });
    }
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    localStorage.removeItem('username');
    toast.info('You have been logged out', { position: 'top-left' });
  };

  return {
    isAuthenticated,
    setIsAuthenticated,
    username,
    password,
    errorMessage,
    login,
    register,
    logout,
    setUsername,
    setPassword,
  };
};
