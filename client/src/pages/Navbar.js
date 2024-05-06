import { FaPhone, FaEnvelope } from 'react-icons/fa'; // Import icons

import { Link } from 'react-router-dom'

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
              <li><Link to="/">Homepage</Link></li>
              <li><Link to="/aboutUs">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          <div className="contact-info">
          <p><FaPhone /> <a className="link" href="tel:+436607700543">+436607700543</a></p>
          <p><FaPhone /> <a className="link" href="tel:+436603135530">+436603135530</a></p>
          <p><FaEnvelope /> <a className="link" href="matorugadino17@gmail.com">matorugadino17@gmail.com</a></p>
          </div>
        </header>

        
    </div>
  );
}

export default Test;