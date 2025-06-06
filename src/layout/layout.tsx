import '../styles/index.css';
import Header from './Header';
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-black text-white">
      <Header />

      <main className="flex-grow flex w-full items-center justify-center px-4 min-h-full">
          <Outlet />
      </main>

      <Footer />
    </div>
  );
}
