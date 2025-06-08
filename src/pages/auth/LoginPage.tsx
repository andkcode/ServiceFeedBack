import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const { login, username, setUsername, password, setPassword } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const success = await login(username, password);
    if (success) navigate('/');
  };
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-white text-black w-full max-w-md p-8 rounded-2xl shadow-lg space-y-6">
        <h1 className="text-3xl font-bold text-center">Login</h1>
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
        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-900 transition duration-200"
        >
          Login
        </button>
        <p className="text-center text-sm"> Don't have an account? <a href="/register" className="underline">Register</a>
        </p>
      </div>
    </div>
  );
}
