import React from 'react';
import pilarlogo from '../../assets/pilar0112.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="pilar_navbar">
      <div className="pilar_navbar-links">
        <div className="pilar_navbar-links-logo">
          <img src={pilarlogo} alt="pilarlogo"></img>
        </div>
      </div>
    </div>
  )
}

export default Navbar