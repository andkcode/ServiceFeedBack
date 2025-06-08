
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import ProtectedRoute from "../context/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
      path: "/",
      element: <AppLayout />,
      children: [
        { index: true, element: <Home /> },                 
        { path: "*", element: <NotFound /> },          
      ],
    },
    ],
  }
]);

export default router;