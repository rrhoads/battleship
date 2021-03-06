import React, { Component } from 'react';

import Game from './Game';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let player1 = "Danny"
    let player2 = "Nate"
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      <Game player1={player1} player2={player2} />
      </div>
    );
  }
}

export default App;
