// Challenge 3 - this component needs to be imported into the my-react-app
import React, { useState, useEffect } from "react";

function FormComponent() {
  // Define state for form input and visual state
  const [inputValue, setInputValue] = useState(""); // Form input
  // Visual states: 'empty', 'typing', 'submitting', 'success', 'error'
  // Step 1: Default status to empty by destructuring the useState object

  // Handle input change, update visual state
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    // Step 2: if the value of the input is greater than zer change the status stateto typing
    // if () {
    // Step 3: Other wise default the status stae to empty
    // } else {
    //   ;
    // }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Step 4:  Change to submitting state

    // Simulate an API call
    setTimeout(() => {
      // Step 5: if tthe input is less than 5 charcterds set the stat to error
      if (inputValue.length < 5) {
        // Trigger error if input length < 5 characters
      } else {
        // Step 6: other wise set the status to error
        // Trigger success otherwise
      }
    }, 2000);
  };

  // Function to reset the form and start over
  // Step 7: set the state of the input value and stats to empty
  const resetForm = () => {
    // Reset input value
    // Reset status to empty
  };

  // useEffect to focus on input field after form submission is complete
  // Step 8 wrap this in a use effect which is dependant on the status
  useEffect(() => {
    if (status === "error" || status === "success") {
      // Automatically focus the input field when there's an error or after success
      document.querySelector("input").focus();
    }
  }, [status]); // Dependency on the status state

  return (
    <div className="container">
      {/* Notice the ternary here */}
      {status === "success" ? (
        <div className="notification is-success">
          <p>Thank you! Your form has been submitted successfully.</p>
          <button className="button is-primary" onClick={resetForm}>
            Submit another response
          </button>
        </div>
      ) : (
        /* Step 9 connect the form to the handle event function which submits the form */
        <form onSubmit={handleSubmit} className="box">
          <div className="field">
            <label className="label">Input</label>
            <div className="control">
              <input
                className={`input ${status === "error" ? "is-danger" : ""}`}
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter at least 5 characters"
                disabled={status === "submitting"}
              />
            </div>
            {status === "error" && (
              <p className="help is-danger">
                Error: Input must be at least 5 characters long.
              </p>
            )}
          </div>
          <div className="field">
            <div className="control">
              <button
                className="button is-primary"
                type="submit"
                disabled={status === "empty" || status === "submitting"}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      )}

      {/* Status-specific messages */}
      {status === "submitting" && (
        <p className="notification is-warning">Submitting your form...</p>
      )}
      {status === "error" && (
        <div className="notification is-danger">
          {/* Step 10 connect the button to the handle event function which resets the form */}
          <button className="button is-warning" onClick={resetForm}>
            Try again
          </button>
        </div>
      )}
    </div>
  );
}

export default FormComponent;
