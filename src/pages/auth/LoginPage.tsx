import { useAuth } from '../../context/AuthContext';


export default function LoginPage() {
  const { login, username, setUsername, password, setPassword } = useAuth();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className=" text-white w-full max-w-md p-8 rounded-2xl shadow-lg space-y-6 border-gray-700 border-2">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button
          onClick={(e) => login(username, password)}
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
