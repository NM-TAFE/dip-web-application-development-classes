import Link from "next/link";

const ApodContent = ({ apodData }) => {
  if (!apodData) {
    return (
      <p className="has-text-centered">
        Please enter parameters and click "Fetch APOD".
      </p>
    );
  }

  return (
    <div>
      {apodData.map((data, index) => (
        <div key={index} className="box">
          {data.media_type === "image" ? (
            <figure className="image is-4by3">
              <img src={data.url} alt={data.title} />
            </figure>
          ) : (
            <div className="video-container">
              <iframe src={data.url} allowFullScreen></iframe>
            </div>
          )}
          <h2 className="title is-4">{data.title}</h2>
          <p>{data.explanation}</p>
          <Link
            href={`/nasa-api/${data.date}`}
            className="button is-link is-inverted is-medium m-1"
          >
            View
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ApodContent;
