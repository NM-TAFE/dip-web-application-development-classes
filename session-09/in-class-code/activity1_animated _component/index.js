// note this file needs to be moved into my-react-app to work
import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function StyledComponent() {
  return (
    <section className="animatedSection">
      This is a styled section with animation
    </section>
  );
}

// 2) Get a reference to the div with ID root
const element = document.getElementById("root");

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(element);
// Stage 6 ------
root.render(<StyledComponent />);
