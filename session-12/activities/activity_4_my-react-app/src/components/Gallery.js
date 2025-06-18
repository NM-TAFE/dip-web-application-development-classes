import React from 'react';
import {useState} from 'react';
import {sculptureList} from "../data/list.js"

const Gallery = () => {
    const [index, setIndex] = useState(0);

    function handleClick() {
      setIndex((index + 1) % sculptureList.length);
    }

    let sculpture = sculptureList[index];
    return (
      <div className="box">
        {/* <Header title="New Gallery" /> */}
        <button className="button is-primary" onClick={handleClick}>
          Next
        </button>
        <h2 className="title is-5">
          <i>{sculpture.name}</i> by {sculpture.artist}
        </h2>
        <h3 className="subtitle is-6">
          ({index + 1} of {sculptureList.length})
        </h3>
        <img src={sculpture.url} alt={sculpture.alt} />
        <p>{sculpture.description}</p>
      </div>
    );
};

export default Gallery;