// template
export function displayApod(data, container) {
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
