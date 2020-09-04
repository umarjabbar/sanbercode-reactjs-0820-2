import React from 'react';
import logo from './logo.svg';
import './App.css';

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
      </header>
       */}
       <div className="Kotak">
          <h1>Form Pembelian Buah</h1>
          <div className="Konten">
            <div className="Atas">
              <div className="Nama-pelanggan">Nama Pelanggan</div>
              <input className="Input-name"></input>
            </div>
            <div className="Bawah">
              <div className="Daftar-item">Daftar Item</div>
              <div className="Item-list">
              <input type="checkbox" name="semangka" value="semangka"></input>
              <label>Semangka </label><br/>
              <input type="checkbox" name="jeruk" value="jeruk"></input>
              <label>Jeruk </label><br/>
              <input type="checkbox" name="nanas" value="nanas"></input>
              <label>Nanas</label><br/>
              <input type="checkbox" name="salak" value="salak"></input>
              <label>Salak</label><br/>
              <input type="checkbox" name="anggur" value="anggur"></input>
              <label>Anggur</label><br/><br/>
              </div>
            </div>
            <button className="Btn-submit">
              <a href="#">Kirim</a>
            </button>
          </div>
       </div>
    </div>
  );
}

export default App;
