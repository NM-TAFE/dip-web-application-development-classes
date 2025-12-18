import React from "react";

const ApodContent = ({ apodData }) => {
  // console.log(apodData);
  if (!apodData) {
    return (
      <p className="has-text-centered">
        Please enter parameters and click "Fetch APOD".
      </p>
    );
  }

  return (
    // template
    <div>
      {apodData.map((data, index) => {
        return (
          <div key={index} className="box">
            {data.media_type === "image" ? (
              <figure className="image is-4by3">
                <img src={data.url} alt={data.title} />
              </figure>
            ) : (
              <div className="video-container">
                <iframe
                  src={data.url}
                  title="video-frame"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            <h2 className="title is-4">{data.title}</h2>
            <p>{data.explanation}</p>
          </div>
        );
      })}
    </div>
  );
};
export default ApodContent;
