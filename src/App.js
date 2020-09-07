import React from 'react';
import logo from './logo.svg';
import './App.css';
import Formulir from './Tugas-9/tugas9.js';
import TableBuah from './Tugas-10/tugas10.js';
import Timer from './Tugas-11/timer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
       <Formulir />
       <TableBuah />
       <div className="tugas-11">
        <Timer start="100" />
       </div>
    </div>
  );
}

export default App