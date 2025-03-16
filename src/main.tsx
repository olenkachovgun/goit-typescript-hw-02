
import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import "./index.css";

import { Toaster } from "react-hot-toast";
import App from "./components/App/App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
  </React.StrictMode>
);
