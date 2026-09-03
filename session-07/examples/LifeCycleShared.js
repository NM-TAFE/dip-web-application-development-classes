import React, { useState, useEffect } from "react";

function LifeCycleShared() {
  const [count, setCount] = useState(0);

  // useEffect to simulate componentDidMount + componentDidUpdate on `count`
  useEffect(() => {
    console.log("Component mounted or count updated:", count);

    return () => {
      console.log("Cleanup before next effect or unmount (count was):", count);
    };
  }, [count]);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);

  return (
    <div>
      <h1>Lifecycle Monitor</h1>

      {/* Child #1: purely presentational */}
      <CounterDisplay count={count} />

      {/* Child #2: interacts with the same shared state */}
      <CounterControls
        count={count}
        onIncrement={increment}
        onDecrement={decrement}
      />

      {/* Child #3: demonstrates side‑effect listening */}
      <CounterLogger count={count} />
    </div>
  );
}

// Child #1: reads the shared state
function CounterDisplay({ count }) {
  return <p>Count: {count}</p>;
}

// Child #2: updates the shared state via callbacks from the parent
function CounterControls({ count, onIncrement, onDecrement }) {
  return (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      <button onClick={onDecrement} disabled={count === 0}>
        -
      </button>
      <button onClick={onIncrement}>+</button>
    </div>
  );
}

// Child #3: reacts to count changes
function CounterLogger({ count }) {
  useEffect(() => {
    console.log("[CounterLogger] count changed to", count);
  }, [count]);

  return null; // no UI
}

export default LifeCycleShared;
