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

    let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    let params = [];

    if (count) params.push(`count=${count}`);
    if (startDate) params.push(`start_date=${startDate}`);
    if (endDate) params.push(`end_date=${endDate}`);
    if (date) params.push(`date=${date}`);
    if (thumbs) params.push(`thumbs=${thumbs}`);

    if (params.length > 0) {
      apiUrl += `&${params.join("&")}`;
    }
    // console.log(params);

    fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "APODViewer/1.0",
        "Cache-Control": "no-cache",
      },
    })
      // Challenge 3
      // 1. change the anonymous arrow function below to check if the response code is 200(ok)
      // 2. if the response is ok return the response.json() object
      // 3. if not ok throw a new error which includes the status code
      // 4. Test the responses in the Network tab
      .then(async (response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("The API call failed");
      })
      .then((data) => {
        if (Array.isArray(data)) {
          apodContent.innerHTML = "";
          data.map((item) => {
            displayTernaryApodItem(item, apodContent);
          });
        } else {
          displayTernaryApodItem(item, apodContent);
        }
      })
      .catch((error) => {
        apodContent.innerHTML += `<p>Media type not supported: ${item.media_type}</p> - ${error}`;
      });
  });
});

function displayTernaryApodItem(item, container) {
  item.media_type === "image"
    ? (container.innerHTML += `
          <figure class="image is-4by3">
            <img src="${item.url}" alt="${item.title}">
          </figure>
          <h2 class="title is-4">${item.title}</h2>
          <p>${item.explanation}</p>
        `)
    : (container.innerHTML += `
          <div class="video-apodContent">
            <iframe src="${item.url}" frameborder="0" allowfullscreen></iframe>
          </div>
          <h2 class="title is-4">${item.title}</h2>
          <p>${item.explanation}</p>
        `);
}
