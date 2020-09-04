import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserInfo from './UserInfo.js';
import Formulir from './Tugas-9/tugas9.js';
import TableBuah from './Tugas-10/tugas10.js';

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
       <UserInfo />
       <Formulir />
       <TableBuah />
    </div>
  );
}

export default App