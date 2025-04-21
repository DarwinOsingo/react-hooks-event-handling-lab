import React from "react";
import ReactDOM from "react-dom";
import Keypad from "./components/Keypad"; 
import EyesOnMe from "./components/EyesOnMe"; 


ReactDOM.render(
  <React.StrictMode>
    <div>
      <h1>Keypad Component</h1>
      <Keypad /> {/* Render Keypad component */}
      <h1>EyesOnMe Component</h1>
      <EyesOnMe /> {/* Render EyesOnMe component */}
    </div>
  </React.StrictMode>,
  document.getElementById("root") // Ensure this matches your HTML's root ID
);
