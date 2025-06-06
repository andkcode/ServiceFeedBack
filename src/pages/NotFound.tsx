import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-extrabold tracking-widest text-white">404</h1>
        <p className="text-xl mt-4 uppercase tracking-widest text-gray-400">Page Not Found</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-block px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition duration-300"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
