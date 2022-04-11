import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

//! Component and Properties

function Biodata(props) {
  return <span>Umurnya {props.age}</span>;
}

function Greeting(props) {
  return (
    <h1>
      Halo {props.name} | <Biodata age={props.age} />
    </h1>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Greeting name="Andika" age="17" />
          <Greeting name="Lelouch" age="19" />
        </header>
      </div>
    );
  }
}

export default App;
