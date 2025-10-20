import React, { useState } from "react";
import { sculptureList } from "../data/sculptures.js";

const Gallery = () => {
  const [index, setIndex] = useState(0);

  function Header({ title }) {
    return <h1 className="title is-4">{title ? title : "Default title"}</h1>;
  }

  function handleClick() {
    setIndex(index + (1 % sculptureList.length));
  }

  let currentSculpture = sculptureList[index];

  return (
    <div className="box">
      <Header title="New Gallery" />
      <button className="button is-primary" onClick={handleClick}>
        Next
      </button>
      <h2 className="title is-5">
        <i>{currentSculpture.name}</i> by {currentSculpture.artist}
      </h2>
      <h3 className="subtitle is-6">
        ({index + 1} of {currentSculpture.length})
      </h3>
      <img src={currentSculpture.url} alt={currentSculpture.alt} />
      <p>{currentSculpture.description}</p>
    </div>
  );
};

export default Gallery;
