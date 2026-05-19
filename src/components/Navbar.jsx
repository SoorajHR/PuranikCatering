import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.jpeg';
import '../styles/Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return () => window.removeEventListener('scroll', changeColor);
  }, []);

  return (
    <div className={color ? 'header header-bg glass' : 'header'}>
      <nav className="navbar container">
        <a href="/" className="logo">
          <img src={logo} alt="Puranik Catering" className="nav-logo-img" />
        </a>

        <div className="hamburger" onClick={handleClick}>
          {click ? (<FaTimes size={30} style={{ color: color ? '#0a2e0a' : '#ffffff' }} />)
            : (<FaBars size={30} style={{ color: color ? '#0a2e0a' : '#ffffff' }} />)}
        </div>

        <ul className={click ? "nav-menu active glass-dark" : "nav-menu"}>
          <li className="nav-item">
            <a href="#hero" onClick={closeMenu}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" onClick={closeMenu}>About Us</a>
          </li>
          <li className="nav-item">
            <a href="#services" onClick={closeMenu}>Services</a>
          </li>
          <li className="nav-item">
            <a href="#gallery" onClick={closeMenu}>Gallery</a>
          </li>
          <li className="nav-item">
            <a href="#testimonials" onClick={closeMenu}>Testimonials</a>
          </li>
          <li className="nav-item nav-btn">
            <a href="#contact" className="btn btn-primary" onClick={closeMenu}>Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
