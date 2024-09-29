import React from "react";
// Step 1 import our modules
import ApodForm from "./components/ApodForm";
import ApodContent from "./components/ApodContent";
import "./App.css";

// Step 2 Create the App constant and create our fetch api call
const App = () => {
  const fetchApodData = async () => {
    const apiKey = "GurS0wJyr12na3jhvOraArdY3bGr64N2ovBUUTh5";
    let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  };

  // Step 3 Render our html with our two components
  return (
    <div className="App">
      <section className="section">
        <div className="container">
          <ApodForm />
          <ApodContent />
        </div>
      </section>
    </div>
  );
};

export default App;
