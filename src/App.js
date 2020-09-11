import React from 'react';
import logo from './logo.svg';
import './App.css';
import Formulir from './Tugas-9/tugas9.js';
import TableBuah from './Tugas-10/tugas10.js';
import Timer from './Tugas-11/timer.js';
import ListForm from './Tugas-12/tugas12.js';
import MateriListForm from './Tugas-12/materi.js';
import Event from './latihan/event.js';
import Form from './latihan/form.js';
import Example from './latihan/hooks.js'
import Hooks from './Tugas-13/tugas13.js'
import Movie from './Tugas-14/movie.js'
import Buah from './Tugas-14/buah'


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
       {/* <Formulir />
       <TableBuah />
       <div className="tugas-11">
        <Timer start="100" />
       </div>
      */}
      {/* <MateriListForm /> 
      <Event />
      <Form />
       <ListForm />
       <Example />
       <Hooks />
      <Movie />
        */}
        <Buah />
    </div>
  );
}

export default App