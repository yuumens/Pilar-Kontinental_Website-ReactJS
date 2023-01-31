import React, { useState } from 'react';
import { IoLogoInstagram, IoLogoTwitter, IoLogoYoutube, IoLogoFacebook } from "react-icons/io5";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import pilarlogo from '../../assets/pilar0111_1.svg';
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
        <a href="https://www.instagram.com/pilarkontinental.official/" target="_blank" rel="noopener noreferrer"> 
          <IoLogoInstagram color="#fff" size = {25} ></IoLogoInstagram> 
        </a>
        <a href="https://www.youtube.com/@pilarkontinental" target="_blank" rel="noopener noreferrer" >
          <IoLogoYoutube color="#fff" size = {25}></IoLogoYoutube>
        </a>
        <a href="https://www.youtube.com/@pilarkontinental" target="_blank" rel="noopener noreferrer" >
          <IoLogoFacebook color="#fff" size = {25}></IoLogoFacebook>
        </a>
        <a href="https://www.youtube.com/@pilarkontinental" target="_blank" rel="noopener noreferrer" >
          <IoLogoTwitter color="#fff" size = {25}></IoLogoTwitter>
        </a>
        {/* <a href="https://www.instagram.com/pilarkontinental.official/" target="_blank" rel="noopener noreferrer"><img src={ig} alt="" /></a>
        <a href="https://www.instagram.com/pilarkontinental.official/" target="_blank" rel="noopener noreferrer"><img src={fb} alt="" /></a>
        <a href="https://www.instagram.com/pilarkontinental.official/" target="_blank" rel="noopener noreferrer"><img src={twit} alt="" /></a>
        <a href="https://www.instagram.com/pilarkontinental.official/" target="_blank" rel="noopener noreferrer"><img src={yt} alt="" /></a> */}
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
                <a href="https://www.instagram.com/pilarkontinental.official/" target="_blank" rel="noopener noreferrer"> 
                  <IoLogoInstagram color="#fff" size = {25} ></IoLogoInstagram> 
                </a>
                <a href="https://www.youtube.com/@pilarkontinental" target="_blank" rel="noopener noreferrer" >
                  <IoLogoYoutube color="#fff" size = {25}></IoLogoYoutube>
                </a>
                <a href="https://www.youtube.com/@pilarkontinental" target="_blank" rel="noopener noreferrer" >
                  <IoLogoFacebook color="#fff" size = {25}></IoLogoFacebook>
                </a>
                <a href="https://www.youtube.com/@pilarkontinental" target="_blank" rel="noopener noreferrer" >
                  <IoLogoTwitter color="#fff" size = {25}></IoLogoTwitter>
                </a>
              </div>
            </div>
        )}
      </div>
    </div>

    
  );
};

export default Navbar;