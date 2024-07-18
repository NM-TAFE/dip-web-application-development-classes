// if isLoggedIn is true
//     render WelcomeComponent
// else
//     render LoginComponent

import React, { useState } from "react";

// Define the WelcomeComponent
const WelcomeComponent = () => <h1>Welcome back!</h1>;

// Define the LoginComponent
const LoginComponent = () => <h1>Please log in.</h1>;

const App = () => {
  // Define a state variable to keep track of the login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Define a function to toggle the login status
  const toggleLogin = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <div>
      {/* Use the ternary operator to conditionally render components based on isLoggedIn */}
      {isLoggedIn ? <WelcomeComponent /> : <LoginComponent />}

      {/* Button to toggle login status */}
      <button onClick={toggleLogin}>{isLoggedIn ? "Log Out" : "Log In"}</button>
    </div>
  );
};

export default App;
