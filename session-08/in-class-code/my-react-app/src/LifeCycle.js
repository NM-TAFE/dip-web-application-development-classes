import React, { useState, useEffect } from "react";

function Lifecycle() {
  const [count, setCount] = useState(0);

  // useEffect for componentDidMount and componentDidUpdate
  useEffect(() => {
    console.log("Component mounted or updated");

    return () => {
      console.log("Component will unmount");
    };
  }, [count]);
  const incrementCount = () => {
    setCount(count + 1);
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
