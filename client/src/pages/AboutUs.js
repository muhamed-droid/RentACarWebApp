import React from 'react';
import './css/AboutUs.css'; // Make sure to create this CSS file
import Navbar from './Navbar';
import Dino from '../photos/Dino.jpg';
import Map from './Map.js';
import AllRightsReserved from './AllRightsReserved.js';
import ButtonToTop from './ButtonToTop.js';
import Footer from './Footer.js';

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className='navbar'>
        <Navbar></Navbar>
      </div>
      <div className="hero">
        <h1 className="animated-title">Willkommen im KFZ Hampi</h1>
        <p>Erfahren Sie mehr über unsere Mission, Vision und Werte.</p>
      </div>

      <div className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={Dino} alt="Team Member" className="team-member-img"/>
            <h3>Dino</h3>
            <p>CEO</p>
          </div>
          {/* Repeat for other team members */}
        </div>
      </div>
      <div className='google-map'>
        <Map/>
      </div>
      <div>
        <ButtonToTop/>
      </div>
      <div> 
        <Footer/>
      </div>
      <div className='allRightsReserved'>
        <AllRightsReserved/>
      </div>
    </div>
  );
};

export default AboutUs;
