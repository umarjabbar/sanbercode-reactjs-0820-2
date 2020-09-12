import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Formulir from '../Tugas-9/tugas9.js';
import TableBuah from '../Tugas-10/tugas10.js';
import Time from '../Tugas-11/tugas11';
import ListForm from '../Tugas-12/tugas12.js';
import Hooks from '../Tugas-13/tugas13.js'
import Buah from '../Tugas-14/buah'
import {ThemeContext, ThemeProvider} from './theme'

function NoMatch() {
  return <h1 className="text-center">404 - Halaman tidak ditemukan</h1>
}

function Home() {
  return <h1 className="text-center">Hallo Selamat Datang</h1>
}

const Navbar = () => {
  // const [Theme, setTheme] = useContext(ThemeContext);
  return (
    <>
      <Router>
        <ThemeProvider>
          <nav className="dark">
            <ul>
              <li><Link to="/tugas-9">Tugas9</Link></li>
              <li><Link to="/tugas-10">Tugas10</Link></li>
              <li><Link to="/tugas-11">Tugas11</Link></li>
              <li><Link to="/tugas-12">Tugas12</Link></li>
              <li><Link to="/tugas-13">Tugas13</Link></li>
              <li><Link to="/tugas-14">Tugas14</Link></li>
            </ul>
          </nav>
        </ThemeProvider>
        <Switch>
          <Route path="/tugas-9" component={Formulir}></Route>
          <Route path="/tugas-10"><TableBuah /></Route>
          <Route path="/tugas-11"><Time /></Route>
          <Route path="/tugas-12"><ListForm /></Route>
          <Route path="/tugas-13"><Hooks /></Route>
          <Route path="/tugas-14"><Buah /></Route>
          <Route><NoMatch /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </Router>
    </>
  )
}
export default Navbar
