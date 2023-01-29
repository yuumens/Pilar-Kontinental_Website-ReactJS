import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import pilarlogo from '../../assets/pilar0111_1.svg';
import { ig, fb, twit, yt } from './import'
import './Navbar.css';


const Navbar = () => {
  const [toggleMenu, setTogglemenu] = useState(false);
  return (
    <div className="pilar_navbar">
      <div className="pilar_navbar-links">
        <div className="pilar_navbar-links-logo">
          <a href="#home"><img href="" src={pilarlogo} alt="pilarlogo"></img></a>
        </div>
        <div className="pilar_navbar-links_container">
          <p><a href="#About">ABOUT</a></p>
          <p><a href="#">SERVICES</a></p>
          <p><a href="#">CONTACT</a></p>
        </div>
      </div>
      <div className="pilar_navbar-socialmedia">
        <a href="https://www.instagram.com/pilarkontinental.official/"><img src={ig} alt="" /></a>
        <a href="https://www.instagram.com/pilarkontinental.official/"><img src={fb} alt="" /></a>
        <a href="https://www.instagram.com/pilarkontinental.official/"><img src={twit} alt="" /></a>
        <a href="https://www.instagram.com/pilarkontinental.official/"><img src={yt} alt="" /></a>
      </div>
      <div className="pilar_navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size = {27} onClick ={() => setTogglemenu(false)} />
          : <RiMenu3Line color="#fff" size = {27} onClick ={() => setTogglemenu(true)} />
        }
        {toggleMenu && (
          <div className="pilar_navbar-menu-container scale-up-center">
            <div className="pilar_navbar-menu-container-links">
              <p><a href="#About">ABOUT</a></p>
              <p><a href="#">SERVICES</a></p>
              <p><a href="#">CONTACT</a></p>
            </div>
              <div className="pilar_navbar-menu_container_socialmedia">
                <a href="https://www.instagram.com/pilarkontinental.official/"><img src={ig} alt="" /></a>
                <a href="https://www.instagram.com/pilarkontinental.official/"><img src={fb} alt="" /></a>
                <a href="https://www.instagram.com/pilarkontinental.official/"><img src={twit} alt="" /></a>
                <a href="https://www.instagram.com/pilarkontinental.official/"><img src={yt} alt="" /></a>
              </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;