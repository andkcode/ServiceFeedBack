import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createRouter,
} from "@react-router/dev";
import routes from "./routes";

const router = createRouter({ routes });

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);
