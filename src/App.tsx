import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Tile } from './components/tile';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          dragonsforever6.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Tile letter="F" color='#bb00d7' />
        <Tile letter="U" color='#2580f0' />
      </header>
    </div>
  );
}

export default App;
