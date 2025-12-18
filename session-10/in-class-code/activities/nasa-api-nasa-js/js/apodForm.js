export function apodForm() {
  const apiKey = "{your_api_key}";
  const date = document.getElementById("date").value;
  const startDate = document.getElementById("start_date").value;
  const endDate = document.getElementById("end_date").value;
  const count = document.getElementById("count").value;
  const thumbs = document.getElementById("thumbs").checked;

  // data
  let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

  if (date) {
    apiUrl += `&date=${date}`;
  }
  if (startDate) {
    apiUrl += `&start_date=${startDate}`;
  }
  if (endDate) {
    apiUrl += `&end_date=${endDate}`;
  }
  if (count) {
    apiUrl += `&count=${count}`;
  }
  if (thumbs) {
    apiUrl += `&thumbs=true`;
  }

  return apiUrl;
}
