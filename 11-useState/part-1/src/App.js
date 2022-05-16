import React from "react";
import "./App.css";

function App() {
  const [important, setImportant] = React.useState("Yes");

  function handleClick() {
    setImportant(important === "Yes" ? "No" : "Yes");
  }

  return (
    <div className="state">
      <h1 className="state--title">Is state important to know?</h1>
      <div onClick={handleClick} className="state--value">
        <h1>{important}</h1>
      </div>
    </div>
  );
}

export default App;
