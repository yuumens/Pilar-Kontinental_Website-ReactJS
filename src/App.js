import React from 'react';
import './App.css'

import { About, Navbar } from './components';
import { Header } from './containers';

const App = () => {
  return (
    <div className="App">
      <div className="pilar_bg">
        <Navbar />
        <Header />
      </div>
        <About />
    </div>
  )
}

export default App