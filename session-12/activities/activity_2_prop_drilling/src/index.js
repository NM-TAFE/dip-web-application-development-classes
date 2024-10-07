import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ContextApp from "./ContextApp";
import "./assets/styles.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    {/* Switch when showing context usage */}
    <App />
    {/* <ContextApp /> */}
  </StrictMode>
);
