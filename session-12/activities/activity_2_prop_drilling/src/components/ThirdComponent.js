import React, { useContext } from "react";
// Uncomment the lines below once context is set
// import { UserContext } from "../contexts/UserContext";

// const ThirdComponent = () => {
const ThirdComponent = ({ userName }) => {
  // const userName = useContext(UserContext);
  return (
    <div>
      <h3>Third Component: User is {userName}</h3>
    </div>
  );
};

export default ThirdComponent;
