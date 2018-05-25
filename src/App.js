import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Display from "./Display";
import Age from "./Age";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 30
    };
    this.rajeunir = this.rajeunir.bind(this);
    this.veillir = this.veillir.bind(this);
  }

  rajeunir() {
    this.setState({
      age: this.state.age - 1
    });
  }
  veillir() {
    this.setState({
      age: this.state.age + 1
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Display age={this.state.age} />
        <Age veillir={this.veillir} rajeunir={this.rajeunir} />
      </div>
    );
  }
}

export default App;
