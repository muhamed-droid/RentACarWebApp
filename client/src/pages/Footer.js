import React from 'react';
import './css/Footer.css';
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ScrollToTopLink from './ScrollToTopLink.js';  // Adjust the path as necessary
import Logo from '../photos/logo.png';


function Footer() {
    return (
        <div className="footer">
            <div className="history-section">
                <div className="logo-container"> 
                <div className="small-logo"> <img src={Logo} alt="Logo" /> </div>
                <div className="company-info">  <p> KFZ Hampi ist ein tradition für Jahren. Wir sind hier seit 10 Jahren. Unsere Arbeit ist Menshen in Versuchen für Autos in Österreich gut gefühlt machen. Wir sind die Tradition...</p></div>
                </div>
            </div>
            <div className="address-section">
                <p><FaMapMarker/> <a className="link" href="https://maps.app.goo.gl/sUADQuFsrFnx663X9" target="_blank" rel="noopener noreferrer"> Vilach, Italiener Straße 70 </a> </p>
                <p><FaPhone /> <a className="link" href="tel:+436607700543">+436607700543</a></p>
                <p><FaPhone /> <a className="link" href="tel:+436603135530">+436603135530</a></p>
                <p><FaEnvelope /> <a className="link" href="mailto:dinomatoruga17@gmail.com">dinomatoruga17@gmail.com</a></p>
            </div>
            <div className="quick-links">
                <h4>Quick Links</h4>
                <ul>
  <li><ScrollToTopLink to="/">Homepage</ScrollToTopLink></li>
  <li><ScrollToTopLink to="/aboutUs">About Us</ScrollToTopLink></li>
  <li><ScrollToTopLink to="/contact">Contact</ScrollToTopLink></li>
</ul>
            </div>
        </div>
    );
}

export default Footer;
