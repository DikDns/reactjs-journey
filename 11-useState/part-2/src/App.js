import React from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = React.useState(0);

  function handleSubtract() {
    setCounter((prevCounter) => --prevCounter);
  }

  function handleAdd() {
    setCounter((prevCounter) => ++prevCounter);
  }

  return (
    <div className="counter">
      <button onClick={handleSubtract} className="counter--minus">
        -
      </button>
      <div className="counter--count">
        <h1>{counter}</h1>
      </div>
      <button onClick={handleAdd} className="counter--plus">
        +
      </button>
    </div>
  );
}

export default App;
