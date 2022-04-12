import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
// Component and Properties
// function Biodata(props) {
//   return <span>Umurnya {props.age}</span>;
// }
// function Greeting(props) {
//   return (
//     <h1>
//       Halo {props.name} | <Biodata age={props.age} />
//     </h1>
//   );
// }

//! State
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.start,
    };
  }

  //? Lifecycle
  componentDidMount() {
    this.addInterval = setInterval(() => this.increase(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.addInterval);
  }

  increase() {
    this.setState((state, props) => ({
      time: parseInt(state.time) + 1,
    }));
  }

  render() {
    return <div>{this.state.time} detik.</div>;
  }
}

//! Event Handler

// Function Component
function Clicker() {
  function handleClick(e) {
    alert("Halo! :)");
    e.preventDefault();
  }

  return (
    <a href="#" onClick={handleClick}>
      Click Me!
    </a>
  );
}

// Class Component
class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kondisi: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      kondisi: !state.kondisi,
    }));
    const appHeader = document.querySelector(`.App-header`);
    appHeader.style.backgroundColor = this.state.kondisi
      ? "#282c34"
      : "#c6d9ff";
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Toggle <p>Lampu sedang {this.state.kondisi ? "menyala" : "mati"}</p>
      </button>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Timer start="0" />
          <br />
          <Clicker />
          <br />
          <Toggle />
        </header>
      </div>
    );
  }
}

export default App;
