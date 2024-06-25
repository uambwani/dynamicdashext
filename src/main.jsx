import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ToastContainer
      theme='dark'
      position='top-right'
      autoClose={5000}
      hideProgressBar={false}
      pauseOnHover
      pauseOnFocusLoss
      transition={Slide}
    />
  </React.StrictMode>
);
