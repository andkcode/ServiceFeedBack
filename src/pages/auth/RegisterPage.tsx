import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  const { register, username, setUsername, password, setPassword } = useAuth();
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords don't match", { position: 'top-right' });
      return;
    }
    register(username, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 p-8 rounded-2xl shadow-lg">

        <div className="flex flex-col items-center mb-1">
          <img
            src="/src/assets/logo.png"
            alt="Logo"
            className="h-20 w-20 invert"
          />
          <h1 className="mt-4 text-white text-xl font-semibold">Create Account</h1>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm text-neutral-400 mb-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-neutral-800 text-white placeholder-neutral-500 border border-neutral-700 focus:outline-none focus:border-white"
              placeholder="@username"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-400 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-neutral-800 text-white placeholder-neutral-500 border border-neutral-700 focus:outline-none focus:border-white"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-400 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-neutral-800 text-white placeholder-neutral-500 border border-neutral-700 focus:outline-none focus:border-white"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-3 bg-neutral-900 text-white font-semibold py-3 rounded-lg hover:bg-neutral-600 transition-colors"
          >
            Register
          </button>
        </form>

        <div className="flex justify-center mt-5">
          <Link
            to="/login"
            className="text-sm text-neutral-400 hover:text-white transition-colors"
          >
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
  );
}
