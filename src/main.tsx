import { AuthProvider } from "./context/AuthContext";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./route/router";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
      <RouterProvider router={router} />
  </AuthProvider>
);
