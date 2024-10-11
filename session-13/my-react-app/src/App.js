import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import StyledComponent from './components/StyledComponent';
import Gallery from './components/Gallery';
import "./App.css";

const App = () => {
    return (
        <Router>
            <Link to="/styled" className="navbar-item">
                Styled Component
            </Link>
            <Link to="/gallery" className="navbar-item">
                Gallery
            </Link>
            <Routes>
                <Route path="/styled" element={<StyledComponent/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
            </Routes>
        </Router>
    );
};

export default App;