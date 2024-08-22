import React from "react";
import ReactDOM from "react-dom/client"; // Note the change in import path

const App = () => <h1>Hello, React!</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
