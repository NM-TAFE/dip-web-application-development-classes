import React, { useState } from "react";
import ApodForm from "./components/ApodForm";
import ApodContent from "./components/ApodContent";
import "./App.css";

const App = () => {
  const [apodData, setApodData] = useState(null);
  const [error, setError] = useState("");

  const fetchApodData = async (params) => {
    const apiKey = "GurS0wJyr12na3jhvOraArdY3bGr64N2ovBUUTh5";
    let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    for (const key in params) {
      apiUrl += `&${key}=${params[key]}`;
    }

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setApodData(Array.isArray(data) ? data : [data]);
      setError("");
    } catch (err) {
      setError(`Error fetching data: ${err.message}`);
    }
  };

  return (
    <div className="App">
      <section className="section">
        <div className="container">
          <h1 className="title">NASA Astronomy Picture of the Day</h1>
          <ApodForm fetchApodData={fetchApodData} />
          {error && <p className="has-text-danger">{error}</p>}
          <ApodContent apodData={apodData} />
        </div>
      </section>
    </div>
  );
};

export default App;
