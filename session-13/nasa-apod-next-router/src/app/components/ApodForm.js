"use client";

import { useState } from "react";

const ApodForm = ({ fetchApodData }) => {
  const [date, setDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [count, setCount] = useState("");
  const [thumbs, setThumbs] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = {};
    if (date) params.date = date;
    if (startDate) params.start_date = startDate;
    if (endDate) params.end_date = endDate;
    if (count) params.count = count;
    if (thumbs) params.thumbs = true;
    fetchApodData(params);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Date (YYYY-MM-DD)</label>
        <div className="control">
          <input
            className="input"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Start Date (YYYY-MM-DD)</label>
        <div className="control">
          <input
            className="input"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">End Date (YYYY-MM-DD)</label>
        <div className="control">
          <input
            className="input"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Count</label>
        <div className="control">
          <input
            className="input"
            type="number"
            min="1"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Include Video Thumbnails</label>
        <div className="control">
          <input
            className="checkbox"
            type="checkbox"
            checked={thumbs}
            onChange={(e) => setThumbs(e.target.checked)}
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button className="button is-link" type="submit">
            Fetch APOD
          </button>
        </div>
      </div>
    </form>
  );
};

export default ApodForm;
