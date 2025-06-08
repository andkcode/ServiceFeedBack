import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import { useState } from 'react';

export default function RegisterPage() {
  const { register, username, setUsername, password, setPassword } = useAuth();
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if(password !== confirmPassword) {
              toast.error('Passwords don\'t match', { position: 'top-right' });
              return;
    }
    register(username, password);
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-white text-black w-full max-w-md p-8 rounded-2xl shadow-lg space-y-6">
        <h1 className="text-3xl font-bold text-center">Register</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 border border-black rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-black rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input 
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-3 border border-black rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-black"

          />
        <button
          onClick={handleRegister}
          className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-900 transition duration-200"
        >
          Register
        </button>
        <p className="text-center text-sm">
          Already have an account? <a href="/login" className="underline">Login</a>
        </p>
      </div>
    </div>
  );
}
