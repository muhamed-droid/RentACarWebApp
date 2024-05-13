import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaBars } from 'react-icons/fa'; // Import hamburger menu icon
import ScrollToTopLink from './ScrollToTopLink.js';
import Logo from '../photos/logo.png';
import './css/Navbar.css';

function Test() {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <ScrollToTopLink to="/">
            <img src={Logo} alt="Logo" />
          </ScrollToTopLink>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <FaBars />
        </div>
        <nav className={isOpen ? "menu active" : "menu"}>
          <ul>
            <li><ScrollToTopLink to="/">Homepage</ScrollToTopLink></li>
            <li><ScrollToTopLink to="/aboutUs">About Us</ScrollToTopLink></li>
            <li><ScrollToTopLink to="/contact">Contact</ScrollToTopLink></li>
          </ul>
        </nav>
        <div className="contact-info">
          <p className="blank"><FaEnvelope /> <a className="link" href="mailto:dinomatoruga17@gmail.com">dinomatoruga17@gmail.com</a></p>
          <p><FaPhone /> <a className="link" href="tel:+436607700543">+436607700543</a></p>
          <p><FaPhone /> <a className="link" href="tel:+436603135530">+436603135530</a></p>
        </div>
      </header>
    </div>
  );
}

export default Test;
