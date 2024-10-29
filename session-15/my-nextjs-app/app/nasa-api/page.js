"use client";

import { useState } from "react";

import ApodForm from "../components/ApodForm";
import ApodContent from "../components/ApodContent";
import "bulma/css/bulma.min.css";
import "../globals.css";

const NasaApi = () => {
  const [apodData, setApodData] = useState(null);
  const [error, setError] = useState("");

  const fetchApodData = async (params) => {
<<<<<<< HEAD
    const apiKey = "GurS0wJyr12na3jhvOraArdY3bGr64N2ovBUUTh5";
=======
    const apiKey = "{YOUR_API_KEY}";
>>>>>>> 8b23c6fbfaff2e670e718920b2131a0fbc0cee60
    let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    for (const key in params) {
      apiUrl += `&${key}=${params[key]}`;
    }

    try {
<<<<<<< HEAD
      // setTimeout(async () => {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setApodData(Array.isArray(data) ? data : [data]);
      // }, 2000);
=======
      setTimeout(async () => {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setApodData(Array.isArray(data) ? data : [data]);
      }, 2000);
>>>>>>> 8b23c6fbfaff2e670e718920b2131a0fbc0cee60
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

export default NasaApi;
