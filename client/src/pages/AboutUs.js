// src/components/AboutUs.js
import React from 'react';
import './css/AboutUs.css'; // Make sure to create this CSS file
import Navbar from './Navbar';
import Dino from '../photos/Dino.jpg';
import Map from './Map.js';
import AllRightsReserved from './AllRightsReserved.js';
import ButtonToTop from './ButtonToTop.js';

const AboutUs = () => {
  return (
    <div className="aboutUs">
        <div className='navbar'>
        <Navbar></Navbar>
      </div>
      <div className="hero">
        <h1>Welcome to Our Company</h1>
        <p>Learn more about our mission, vision, and values.</p>
      </div>

      <div className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={Dino} alt="Team Member"/>
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
      <div className='allRightsReserved'>
        <AllRightsReserved/>
      </div>
    </div>
  );
};

export default AboutUs;
