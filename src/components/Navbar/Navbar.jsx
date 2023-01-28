import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import pilarlogo from '../../assets/pilar0111_1.svg';
import { ig, fb, twit, yt } from './import'
import './Navbar.css';


const Navbar = () => {
  return (
    <div className="pilar_navbar">
      <div className="pilar_navbar-links">
        <div className="pilar_navbar-links-logo">
          <a href="#home"><img href="" src={pilarlogo} alt="pilarlogo"></img></a>
        </div>
        <div className="pilar_navbar-links_container">
          <p><a href="#About">ABOUT</a></p>
          <p><a href="">SERVICES</a></p>
          <p><a href="">CONTACT</a></p>
        </div>
      </div>
      <div className="pilar_navbar-socialmedia">
        <a href="https://www.instagram.com/pilarkontinental.official/"><img src={ig} alt="" /></a>
        <a href="https://www.instagram.com/pilarkontinental.official/"><img src={fb} alt="" /></a>
        <a href="https://www.instagram.com/pilarkontinental.official/"><img src={twit} alt="" /></a>
        <a href="https://www.instagram.com/pilarkontinental.official/"><img src={yt} alt="" /></a>
      </div>
      <div className="pilar_navbar-menu">

      </div>
    </div>
  )
}

export default Navbar