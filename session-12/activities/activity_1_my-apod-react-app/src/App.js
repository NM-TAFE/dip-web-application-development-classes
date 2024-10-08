import React, { useState } from "react";
import ApodForm from "./components/ApodForm";
import ApodContent from "./components/ApodContent";
import "./App.css";
import { buildApiUrl } from "./utilities/apiUrl";

const App = () => {
  const [apodData, setApodData] = useState(null);
  const [error, setError] = useState("");

  const fetchApodData = async (parameters) => {
    // Step 2 Reset the state before every api call
    setApodData(null);
    setError("");

    const apiUrl = buildApiUrl(parameters);

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
