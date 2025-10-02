import React, { useState } from "react";

function DateInputComponent() {
  const [newDate, setNewDate] = useState("");

  const inputStyle = {
    margin: "5px",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const handleChange = (event) => {
    setNewDate(event.target.value);
  };

  return (
    <input
      className="input"
      type="date"
      style={inputStyle}
      value={newDate}
      onChange={handleChange}
    />
  );
}

export default DateInputComponent;
