import React from "https://unpkg.com/react@18/umd/react.development.js";
import ReactDOM from "https://unpkg.com/react-dom@18/umd/react-dom.development.js";
import { sculptureList } from "./data.js";

console.log("index.js");

console.log(ReactDOM);

const app = document.getElementById("app");

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

function Gallery() {
  const { useState } = React;
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex((index + 1) % sculptureList.length); // Loop back to the first sculpture
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </>
  );
}

const root = ReactDOM.createRoot(app);
root.render(<Gallery />);
