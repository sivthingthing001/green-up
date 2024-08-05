import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/Logo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="greenup__navbar">
      <div className="greenup__navbar-links">
        <div className="greenup__navbar-links_logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="greenup__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#blog">Blog</a></p>
          <p><a href="#product">Our Product</a></p>
          <p><a href="#aboutus">About Us</a></p>
          <p><a href="#contactus">Contact Us</a></p>
        </div>
      </div>     
      <div className="greenup__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="greenup__navbar-menu_container scale-up-center">
            <div className="greenup__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#blog">Blog</a></p>
              <p><a href="#product">Our Product</a></p>
              <p><a href="#aboutus">About Us</a></p>
              <p><a href="#contactus">Contact Us</a></p>
            </div> 
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
