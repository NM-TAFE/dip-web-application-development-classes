import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const FourthComponent = () => {
  const userName = useContext(UserContext);

  return (
    <div>
      <h3>Fourth Component: User is {userName}</h3>
    </div>
  );
};

export default FourthComponent;
