document.addEventListener("DOMContentLoaded", () => {
  const fetchApodButton = document.getElementById("fetch-apod");
  const apodContent = document.getElementById("apod-content");
  const apiKey = "GurS0wJyr12na3jhvOraArdY3bGr64N2ovBUUTh5";

  fetchApodButton.addEventListener("click", () => {
    const date = document.getElementById("date").value;
    const startDate = document.getElementById("start_date").value;
    const endDate = document.getElementById("end_date").value;
    const count = document.getElementById("count").value;
    const thumbs = document.getElementById("thumbs").checked;

    let params = [];
    if (count) params.push(`count=${count}`);
    if (startDate) params.push(`start_date=${startDate}`);
    if (endDate) params.push(`end_date=${endDate}`);
    if (date) params.push(`date=${date}`);
    if (thumbs) params.push(`thumbs=${thumbs}`);

    // Challenge 1
    // 1. check all the form fields to see which fields have data
    // 2. add them to the apiURL as parameters
    // 3. Test the responses in the Network tab
    // console.log(params);

    // Challenge 2
    // 1. add the following headers to your API call content type, user agent & cache control
    // 2. set the cache control no no cache
    // 3. set the content type application/json
    // 4. Test the responses in the Network tab

    // Challenge 3
    // function displayApod(data, apodContent) {
    //   // Challenge 4
    //   // 1. Move the if/else if/else into a resusable function ready for modularisation
    // }
  });
});
