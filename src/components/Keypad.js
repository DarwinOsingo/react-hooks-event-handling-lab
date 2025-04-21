// Code Keypad Component Here

import React, { useState } from "react";

const Keypad = () => {
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    setPassword(event.target.value);
    console.log("Entering password...");
  };

  return (
    <input
      type="password"
      value={password}
      onChange={handleChange}
      placeholder="Enter password"
    />
  );
};

export default Keypad;
