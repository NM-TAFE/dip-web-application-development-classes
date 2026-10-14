import { displayApod } from "./displayApod.js";
import { apodForm } from "./apodForm.js";

document.addEventListener("DOMContentLoaded", () => {
  const fetchApodButton = document.getElementById("fetch-apod");
  const apodContent = document.getElementById("apod-content");

  // event handler
  fetchApodButton.addEventListener("click", () => {
    let apiUrl = "";
    apiUrl = apodForm();

    if (apiUrl) {
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
    }
  });
});
