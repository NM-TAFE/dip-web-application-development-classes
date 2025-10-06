import React, { useState } from "react";
import SecondComponent from "./components/SecondComponent";
import FourthComponent from "./components/FourthComponent";
import { UserContext } from "./contexts/UserContext";

const ContextApp = () => {
  const [userName, setUserName] = useState("Diane Crisp");

  return (
    <UserContext.Provider value={userName}>
      <div>
        <h1>Using Context API</h1>
        <SecondComponent />
        <FourthComponent />
      </div>
    </UserContext.Provider>
  );
};

export default ContextApp;
