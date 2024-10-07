import React, { useState } from "react";
import ApodForm from "./components/ApodForm";
import ApodContent from "./components/ApodContent";
import "./App.css";

const App = () => {
  const [apodData, setApodData] = useState(null);
  const [error, setError] = useState("");

  const fetchApodData = async (parameters) => {
    const apiKey = "{your_api_key}";
    let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    // Activity 4 Follow Up
    // Step 1 Add the parameters to the URL so the api is used properly
    for (const key in parameters) {
      apiUrl += `&${key}=${parameters[key]}`;
    }

    // Step 2 Reset the state before every api call
    setApodData(null);
    setError("");

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setError("");
      // Set the APOD data as an array even if it is only one item
      setApodData(Array.isArray(data) ? data : [data]);
    } catch (err) {
      setError(`Error fetching data: ${err.message}`);
    }
  };

  return (
    <div className="App">
      <section className="section">
        <div className="container">
          <ApodForm fetchApodData={fetchApodData} />
          <ApodContent apodData={apodData} />
        </div>
      </section>
    </div>
  );
};

export default App;
