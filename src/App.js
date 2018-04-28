import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
