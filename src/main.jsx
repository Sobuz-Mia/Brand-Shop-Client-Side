import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import CreateRoute from "./routes/Routes.jsx";
import AuthProvider from "./provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={CreateRoute}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
