import Link from "next/link";
import Image from 'next/image'

const ApodContent = ({ apodData }) => {
  if (!apodData) {
    return (
      <p className="has-text-centered">
        Please enter parameters and click &quot;Fetch APOD &quot;.
      </p>
    );
  }

  return (
    <div>
      {apodData.map((data, index) => (
        <div key={index} className="box">
          {data.media_type === "image" ? (
            <figure className="image is-4by3">
              {/* <img src={data.url} alt={data.title} /> */}
                <Image
                  src={data.url}
                  alt={data.title}
                  width={800}
                  height={500}
                />
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
