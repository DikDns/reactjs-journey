import React from "react";
import WindowTracker from "./WindowTracker";
import "./App.css";

function App() {
  const [show, setShow] = React.useState(true);
  function handleClick(e) {
    e.preventDefault();
    setShow((prevShow) => !prevShow);
  }

  return (
    <div className="container">
      <button onClick={handleClick}>Toggle WindowTracker</button>
      {show && <WindowTracker />}
    </div>
  );
}

export default App;
