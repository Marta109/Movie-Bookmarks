import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/app";
import { BrowserRouter } from "react-router";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
