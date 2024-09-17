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

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // render
        if (Array.isArray(data)) {
          apodContent.innerHTML = "";
          data.forEach((item) => displayApod(item, apodContent));
        } else {
          apodContent.innerHTML = "";
          displayApod(data, apodContent);
        }
      })
      .catch((error) => {
        apodContent.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
      });
  });

  // template
  function displayApod(data, container) {
    if (data.media_type === "image") {
      container.innerHTML += `
                  <figure class="image is-4by3">
                      <img src="${data.url}" alt="${data.title}">
                  </figure>
                  <h2 class="title is-4">${data.title}</h2>
                  <p>${data.explanation}</p>
              `;
    } else if (data.media_type === "video") {
      container.innerHTML += `
                  <div class="video-container">
                      <iframe src="${data.url}" frameborder="0" allowfullscreen></iframe>
                  </div>
                  <h2 class="title is-4">${data.title}</h2>
                  <p>${data.explanation}</p>
              `;
    } else {
      container.innerHTML += `<p>Media type not supported: ${data.media_type}</p>`;
    }
  }
});
