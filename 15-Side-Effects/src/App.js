import React from "react";
import "./App.css";

function App() {
  const [SWData, setSWData] = React.useState({});
  const [count, setCount] = React.useState(1);

  console.log("Component Rendered");

  React.useEffect(() => {
    console.log("Effects Ran");
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((response) => response.json())
      .then((data) => setSWData(data));
  }, [count]);

  return (
    <div className="app">
      <h1>The count is {count}</h1>
      <button onClick={() => setCount((prevCount) => ++prevCount)}>add</button>
      <div className="data">{JSON.stringify(SWData)}</div>
    </div>
  );
}

export default App;
