// updates for activity 1
import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/style.css";
import App from "./App.js";
// 2) Get a reference to the div with ID root
const element = document.getElementById("root");

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(element);
// 4 Render the element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
