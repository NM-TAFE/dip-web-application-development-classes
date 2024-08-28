//Set break points at
import React, { useState, useEffect } from "react";

function Lifecycle() {
  const [count, setCount] = useState(0);

  // useEffect for componentDidMount and componentDidUpdate
  useEffect(() => {
    console.log("Component mounted or updated"); // debugger

    return () => {
      //debugger
      console.log("Component will unmount"); // debugger
    }; // debugger
  }, [count]);
  const incrementCount = () => {
    setCount(count + 1); // debugger
  };

  return (
    <div>
      <h1>Lifecycle Monitor</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default Lifecycle;
