import React from 'react';
import './App.css'

import { About, Navbar } from './components';
import { Header } from './containers';
import pilarhome from './assets/pilar-home.png'

const App = () => {
  return (
    <div className="App">
      <div className="pilar_bg">
        <Navbar></Navbar>
          {/* <img src={pilarhome} className="mains"/> */}
          <Header></Header>
      </div>
        <About />
    </div>
  )
}

export default App