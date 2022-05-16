// import Main from "./components/Main";
import React from "react";
// import { ReactDOM } from "react";
import "./App.css";

function App() {
  const [state, setState] = React.useState(["item 1", "item 2"]);

  function handleClick() {
    const newState = `item ${state.length + 1}`;
    setState((prevState) => [...prevState, newState]);
  }

  const data = state.map((item) => <p key={item}>{item}</p>);

  return (
    <main>
      <button onClick={handleClick}>Add Item</button>
      {data}
    </main>
  );
}

export default App;
