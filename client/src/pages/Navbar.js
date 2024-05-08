import { FaPhone, FaEnvelope } from 'react-icons/fa'; // Import icons

import ScrollToTopLink from './ScrollToTopLink.js'; 

import Logo from '../photos/logo.png'

import './css/Navbar.css'

//<li><Link to="/info">Info</Link></li>
function Test() {
  return (
    <div className="App">
        <header className="header">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <nav className="menu">
          <ul>
            <li><ScrollToTopLink to="/">Homepage</ScrollToTopLink></li>
            <li><ScrollToTopLink to="/aboutUs">About Us</ScrollToTopLink></li>
            <li><ScrollToTopLink to="/contact">Contact</ScrollToTopLink></li>
          </ul>
          </nav>
          <div className="contact-info">
          <p><FaPhone /> <a className="link" href="tel:+436607700543">+436607700543</a></p>
          <p><FaPhone /> <a className="link" href="tel:+436603135530">+436603135530</a></p>
          <p><FaEnvelope /> <a className="link" href="mailto:dinomatoruga17@gmail.com">dinomatoruga17@gmail.com</a></p>
          </div>
        </header>

        
    </div>
  );
}

export default Test;