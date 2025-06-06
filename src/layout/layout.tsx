import '../styles/App.css';
import Header from './Header';
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function App() {

  return (
    <>
    <div className="flex flex-col min-h-screen w-full">
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
    </div>
    </>
  )
}


