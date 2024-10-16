import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ApodPage from "./pages/ApodPage";
import Accordion from "./components/Accordian";
import Gallery from "./components/Gallery";
import GalleryItem from "./components/GalleryItem";
import PeopleList from "./components/PeopleList";
import StyledComponent from "./components/StyledComponent";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Link to="/" className="navbar-item">
        Home
      </Link>
      <Link to="/accordion" className="navbar-item">
        Accordion
      </Link>
      <Link to="/gallery" className="navbar-item">
        Gallery
      </Link>
      <Link to="/gallery/1" className="navbar-item">
        Sculpture 1
      </Link>
      <Link to="/people" className="navbar-item">
        People List
      </Link>
      <Link to="/styled" className="navbar-item">
        Styled Component
      </Link>

      <Routes>
        <Route path="/" element={<ApodPage />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:id" element={<GalleryItem />} />
        <Route path="/people" element={<PeopleList />} />
        <Route path="/styled" element={<StyledComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
