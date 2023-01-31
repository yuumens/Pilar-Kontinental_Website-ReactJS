import React from 'react';
import './App.css'

// import { About, Navbar } from './components';
// import { Header } from './containers';

import Home from './components/Home/Home'
import About from '../src/components/About/About'
import Navbar from '../src/components/Navbar/Navbar'

import { BrowserRouter as Router, Route, Link, Switch, BrowserRouter, Routes }
                  from 'react-router-dom';

const App = () => {
  return (
  <div className="App">
    <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/About" element={<About />}></Route>
          </Routes>
    </Router>
  </div>
  )
}

export default App