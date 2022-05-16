import React from "react";
import Box from "./components/Box";
import "./App.css";
import Boxes from "./data/boxes.json";

function App() {
  const [boxes, setBoxes] = React.useState(Boxes);

  function toggle(e) {
    setBoxes((prevBoxes) => {
      return prevBoxes.map((box) => {
        return e.target.id == box.id ? { ...box, on: !box.on } : box;
      });
    });
  }

  const box = boxes.map((box) => (
    <Box key={box.id} id={box.id} on={box.on} handleClick={toggle}></Box>
  ));

  return (
    <main>
      <h1>Boxes will go here</h1>
      {box}
    </main>
  );
}

export default App;
