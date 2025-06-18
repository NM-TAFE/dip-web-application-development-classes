import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { sculptureList } from "../data/list.js";

const GalleryItem = () => {
  // get the param from the url
  // 'http://localhost/gallery/1'
  // useParams => 1
  const { id } = useParams();

  // create our state gfor the gallery item to show
  // null default
  const [item, setItem] = useState(null);

  // use effect search the sculturelist array for the id taken from the params url
  useEffect(() => {
    // serach the scultureList array for the item with the id of 1
    // in the array find the item with the id of 1
    let sculpture = sculptureList.find((item) => {
      return item.id == id;
    });

    // set state of item to be the individual sculpture
    setItem(sculpture);
  }, [id]);

  // render template
  return (
    <div className="box mt-1">
      {item ? (
        <>
          <h2 className="title is-5">
            <i>{item.name}</i> by {item.artist}
          </h2>
          <h3 className="subtitle is-6">
            ({item.id + 1} of {sculptureList.length})
          </h3>
          <img src={item.url} alt={item.alt} />
          <p>{item.description}</p>
        </>
      ) : (
        <p> Item not found</p>
      )}
    </div>
  );
};

export default GalleryItem;
