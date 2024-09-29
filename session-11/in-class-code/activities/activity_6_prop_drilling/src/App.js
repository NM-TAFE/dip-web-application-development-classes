// App.js
import React, { useState } from "react";
import SecondComponent from "./components/SecondComponent";

const App = () => {
  // Consider our complex UserObject here!!!
  const [userName, setUserName] = useState("Diane Crisp");

  return (
    <div>
      <h1>Prop Drilling Example</h1>
      <SecondComponent userName={userName} />
    </div>
  );
};

export default App;
