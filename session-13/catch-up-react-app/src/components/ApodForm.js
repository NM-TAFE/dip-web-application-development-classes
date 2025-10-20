import React, { useState } from "react";

const ApodForm = ({ fetchApodData }) => {
  // console.log(fetchApodData(), props);
  // For the form fields
  const [date, setDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [count, setCount] = useState("");
  const [thumbs, setThumbs] = useState(false);

  // what about the event
  const handleSubmit = (e) => {
    e.preventDefault();
    const params = {};

    if (date) params.date = date;
    if (startDate) params.start_date = startDate;
    if (endDate) params.end_date = date;
    if (count) params.count = count;
    if (thumbs) params.thumbs = thumbs;
    // console.log(`Inside the handlesubmit apodform parameters is ${parameters}`);
    fetchApodData(params);
  };

  return (
    <form onSubmit={handleSubmit} className="section">
      <div className="container">
        <h1 className="title">NASA Astronomy Picture of the Day</h1>

        <div className="field">
          <label className="label">Date (YYYY-MM-DD)</label>
          <div className="control">
            <input
              id="date"
              className="input"
              type="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Start Date (YYYY-MM-DD)</label>
          <div className="control">
            <input
              id="start_date"
              className="input"
              type="date"
              onChange={(e) => setStartDate(e.target.value)}
              value={startDate}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">End Date (YYYY-MM-DD)</label>
          <div className="control">
            <input
              id="end_date"
              className="input"
              type="date"
              onChange={(e) => setEndDate(e.target.value)}
              value={endDate}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Count</label>
          <div className="control">
            <input
              id="count"
              className="input"
              type="number"
              min="1"
              onChange={(e) => setCount(e.target.value)}
              value={count}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Include Video Thumbnails</label>
          <div className="control">
            <input
              id="thumbs"
              className="checkbox"
              type="checkbox"
              onChange={(e) => setThumbs(e.target.checked)}
              checked={thumbs}
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button id="fetch-apod" className="button is-link">
              Fetch APOD
            </button>
          </div>
        </div>

        <div id="apod-content" className="box">
          <p className="has-text-centered">
            Please enter parameters and click "Fetch APOD".
          </p>
        </div>
      </div>
    </form>
  );
};

export default ApodForm;
