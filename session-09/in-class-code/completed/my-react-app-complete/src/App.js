// src/App.js
import React, { useEffect } from "react";
// Step 2 import the component
import DateInputComponent from "./components/DateInputComponent";

function App() {
  // debugger
  //Step 10: Initialise window.date if not already set
  if (typeof window.date === "undefined") {
    window.date = ""; // or `new Date()` if you want a default date
  }
  // Step 3: bring across the rest of the form HTML
  // useEffect(() => {
  // Vanilla JavaScript code to handle other inputs and buttons
  const fetchApodButton = document.getElementById("fetch-apod");
  const apodContent = document.getElementById("apod-content");

  fetchApodButton.addEventListener("click", () => {
    const startDate = document.getElementById("start_date").value;
    const endDate = document.getElementById("end_date").value;
    const count = document.getElementById("count").value;
    const thumbs = document.getElementById("thumbs").checked;

    // Assume fetchApodData is defined elsewhere
    let params = {};
    if (startDate) params.start_date = startDate;
    if (endDate) params.end_date = endDate;
    if (count) params.count = count;
    if (thumbs) params.thumbs = true;

    fetchApodData(params)
      .then((data) => {
        apodContent.innerHTML = "";
        if (Array.isArray(data)) {
          data.forEach((item) => displayApod(item, apodContent));
        } else {
          displayApod(data, apodContent);
        }
      })
      .catch((error) => {
        apodContent.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
      });
  });
  // }, []);

  // Step 5: Create a function to handle the change and pass the change fro the parent to the chile
  // Function to handle date change from React component
  const handleDateChange = (newDate) => {
    window.date = newDate; // Store the date in a global variable - we have no state!!!
  };

  debugger;

  return (
    <div>
      <h1>APOD Viewer</h1>
      {/* React Component */}
      {/* Step 4: Use our new component */}
      {/* <DateInputComponent newDate="" /> */}
      {/* <DateInputComponent onDateChange={handleDateChange} newDate="" /> */}
      {/* Step 6: pass the changed value and the function to capture the change as props */}
      <DateInputComponent
        onDateChange={handleDateChange}
        newDate={window.date}
      />

      {/* Vanilla HTML Inputs and Button */}
      <input type="date" id="start_date" placeholder="Start Date" />
      <input type="date" id="end_date" placeholder="End Date" />
      <input type="number" id="count" placeholder="Count" />
      <label>
        <input type="checkbox" id="thumbs" /> Show Thumbnails
      </label>
      <button id="fetch-apod">Fetch APOD</button>

      <div id="apod-content"></div>
    </div>
  );
}

export default App;
