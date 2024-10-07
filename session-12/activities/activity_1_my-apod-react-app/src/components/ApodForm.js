import React, { useState } from "react";

// data
const ApodForm = ({ fetchApodData }) => {
  const [date, setDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [count, setCount] = useState("");
  const [thumbs, setThumbs] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const parameters = {};
    if (date) parameters.date = date;
    if (startDate) parameters.start_date = startDate;
    if (endDate) parameters.end_date = endDate;
    if (count) parameters.count = count;
    if (thumbs) parameters.thumbs = true;
    fetchApodData(parameters);
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
            onChange={(event) => setDate(event.target.value)}
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
            onChange={(event) => setStartDate(event.target.value)}
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
            onChange={(event) => setEndDate(event.target.value)}
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
            onChange={(event) => setCount(event.target.value)}
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
            onChange={(event) => setThumbs(event.target.checked)}
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
