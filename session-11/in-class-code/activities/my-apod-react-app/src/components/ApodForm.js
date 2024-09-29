import React from "react";

// Step 4 bring across our HTML for the form
const ApodForm = () => {
  return (
    <form class="section">
      <div class="container">
        <h1 class="title">NASA Astronomy Picture of the Day</h1>

        <div class="field">
          <label class="label">Date (YYYY-MM-DD)</label>
          <div class="control">
            <input id="date" class="input" type="date" />
          </div>
        </div>

        <div class="field">
          <label class="label">Start Date (YYYY-MM-DD)</label>
          <div class="control">
            <input id="start_date" class="input" type="date" />
          </div>
        </div>

        <div class="field">
          <label class="label">End Date (YYYY-MM-DD)</label>
          <div class="control">
            <input id="end_date" class="input" type="date" />
          </div>
        </div>

        <div class="field">
          <label class="label">Count</label>
          <div class="control">
            <input id="count" class="input" type="number" min="1" />
          </div>
        </div>

        <div class="field">
          <label class="label">Include Video Thumbnails</label>
          <div class="control">
            <input id="thumbs" class="checkbox" type="checkbox" />
          </div>
        </div>

        <div class="field">
          <div class="control">
            <button id="fetch-apod" class="button is-link">
              Fetch APOD
            </button>
          </div>
        </div>

        <div id="apod-content" class="box">
          <p class="has-text-centered">
            Please enter parameters and click "Fetch APOD".
          </p>
        </div>
      </div>
    </form>
  );
};

export default ApodForm;
