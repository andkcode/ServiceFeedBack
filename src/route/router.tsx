import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, 
    children: [
    ],
  },
]);

export default router;
