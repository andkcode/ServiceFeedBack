import '../styles/index.css';
import Header from './Header';
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

export default function AppLayout() {
  const notify = () => toast("Wow so easy!");
  return (
    <div className="flex flex-col min-h-screen w-full bg-black text-white">
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
      <main className="flex-grow flex w-full items-center justify-center px-4 min-h-full">
        <button onClick={notify}>Notify!</button>
          <Outlet />
      </main>

      <Footer />
    </div>
  );
}
