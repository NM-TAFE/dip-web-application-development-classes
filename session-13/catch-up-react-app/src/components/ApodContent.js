import React, { useState } from "react";

const ApodContent = ({ apodData }) => {
  console.log(apodData);
  // catch any null return
  if (!apodData) {
    return <p className="has-text-centered">Please amend the parameters</p>;
  }

  // otherwise return a map of the content
  return (
    <div>
      {apodData.map((data, index) => {
        return (
          <div key={index} className="box">
            {/* { true ? one template : other template} */}
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
