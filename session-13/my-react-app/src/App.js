import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Accordion from "./components/Accordian";
import Gallery from "./components/Gallery";
import StyledComponent from "./components/StyledComponent";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Link to="/accordion" className="navbar-item">
        Accordion
      </Link>
      <Link to="/gallery" className="navbar-item">
        Gallery
      </Link>
      <Link to="/styled" className="navbar-item">
        Styled Component
      </Link>

      <Routes>
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/styled" element={<StyledComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
