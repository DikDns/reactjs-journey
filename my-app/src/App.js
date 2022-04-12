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

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Timer start="100" />
        </header>
      </div>
    );
  }
}

export default App;
