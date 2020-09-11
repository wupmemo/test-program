import React from 'react';
import logo from './logo.png';
import './App.css';
import Button from '@material-ui/core/Button';
import GameGrid from './GameGrid'

function sayHi() {
  console.log("say Hi")
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <i className="space">Game starts below .. fill in TextFields and Hit play Game</i>
        <GameGrid />
        <Button variant="contained" color="primary" onClick={sayHi}>
          Start Game
        </Button>
        <br />
      </header>
    </div>
  );
}

export default App;
