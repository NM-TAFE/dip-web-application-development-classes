import { notFound } from "next/navigation";

export default async function ApodDetail({ params }) {
  const apiKey = "GurS0wJyr12na3jhvOraArdY3bGr64N2ovBUUTh5";

  const { id } = params;

  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${id}`;
  const res = await fetch(apiUrl);

  if (!res.ok) {
    notFound();
  }

  const apodData = await res.json();

  return (
    <div className="box">
      {apodData.media_type === "image" ? (
        <figure className="image is-4by3">
          <img src={apodData.url} alt={apodData.title} />
        </figure>
      ) : (
        <div className="video-container">
          <iframe src={apodData.url} frameBorder="0" allowFullScreen></iframe>
        </div>
      )}
      <h2 className="title is-4">{apodData.title}</h2>
      <p>{apodData.explanation}</p>
    </div>
  );
}
