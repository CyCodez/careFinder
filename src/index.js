import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
// import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

const app = document.getElementById("root");
createRoot(app).render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);
