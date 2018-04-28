import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            minutes: null,
            hours: null,
            items: [],
            title: '',
            filterText: '',
            sheetNumber: 2
        }
    }



    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
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
