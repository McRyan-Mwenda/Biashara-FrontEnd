import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
