import React from "react";

// Import and render the DateInputComponent
// Step 1: copy our component across
// Step 7: destructure the new props
// Step 11: set a default value for our newDate
function DateInputComponent({ newDate = "", onDateChange }) {
  debugger;
  // function DateInputComponent() {
  const inputStyle = {
    margin: "5px",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const inputRef = React.useRef(null);

  // const handleChange = (event) => {
  //   const newDate = event.target.value;
  //   inputRef.current.value = newDate;
  //   debugger;
  // };

  const handleChange = (event) => {
    const newDate = event.target.value;
    inputRef.current.value = newDate; // Update the ref value
    // Step 8 use the function prop passed to update & render the date
    onDateChange(newDate); // Call the function passed as prop to handle date change
  };

  return (
    <input
      type="date"
      className="input"
      style={inputStyle}
      ref={inputRef}
      value={newDate} // Step 9: Use the newDate prop as the value for the input
      onChange={handleChange}
    />
  );
}

export default DateInputComponent;
