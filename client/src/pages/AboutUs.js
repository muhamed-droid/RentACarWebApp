// src/components/AboutUs.js
/*import React from 'react';
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
      <div> </div>
      <div className="hero">
        <h1>Willkommen im KFZ Hampi</h1>
        <p>Erfahren Sie mehr über unsere Mission, Vision und Werte.</p>
      </div>

      <div className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={Dino} alt="Team Member"/>
            <h3>Dino</h3>
            <p>CEO</p>
          </div>
          {/* Repeat for other team members }
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

export default AboutUs; */ 

import React from 'react';
import './css/AboutUs.css';
import Navbar from './Navbar';
import Image from '../photos/aboutUs.png';
import Dino from '../photos/Dino.jpg';
import Map from './Map.js';
import AllRightsReserved from './AllRightsReserved.js';
import ButtonToTop from './ButtonToTop.js';
import Footer from './Footer.js';
import visionIcon from '../photos/vision-icon.jpg';  // Update the path as needed
import missionIcon from '../photos/mission-icon.png';  // Update the path as needed

function AboutUs() {
  return (
    <div className="aboutus">
      <div>
        <Navbar/>
      </div>
      <div className="image-container">
      <img src={Image} alt="Logo" className="image"/>
      </div>
      <section className="intro-section">
        <h1>Willkommen im KFZ Hampi</h1>
        <p>Erfahren Sie mehr über unsere Mission, Vision und Werte. A week ago a friend invited a couple of other couples over for dinner. Eventually, the food (but not the wine) was cleared off the table for what turned out to be some fierce Scrabbling. Heeding the strategy of going for the shorter, more valuable word over the longer cheaper word, our final play was “Bon,” which–as luck would have it!–happens to be a Japanese Buddhist festival, and not, as I had originally asserted while laying the tiles on the board, one half of a chocolate-covered cherry treat. Anyway, the strategy worked. My team only lost by 53 points instead of 58.

Just the day before, our host had written of the challenges of writing short. In journalism–my friend’s chosen trade, and mostly my own, too–Mark Twain’s observation undoubtedly applies: “I didn’t have time to write a short letter, so I wrote a long one instead.” The principle holds across genres, in letters, reporting, and other writing. It’s harder to be concise than to blather. (Full disclosure, this blog post will clock in at a blather-esque 803 words.) Good writing is boiled down, not baked full of air like a souffl??. No matter how yummy souffl??s may be. Which they are. Yummy like a Grisham novel.

Lately, I’ve been noticing how my sentences have a tendency to keep going when I write them onscreen. This goes for concentrated writing as well as correspondence. (Twain probably believed that correspondence, in an ideal world, also demands concentration. But he never used email.) Last week I caught myself packing four conjunctions into a three-line sentence in an email. That’s inexcusable. Since then, I have tried to eschew conjunctions whenever possible. Gone are the commas, the and’s, but’s, and so’s; in are staccato declaratives. Better to read like bad Hemingway than bad Faulkner.

Length–as we all know, and for lack of a more original or effective way of saying it–matters. But (ahem), it’s also a matter of how you use it. Style and length are technically two different things.

Try putting some prose onscreen, though, and they mix themselves up pretty quickly. This has much to do with the time constraints we claim to feel in the digital age. We don’t have time to compose letters and post them anymore–much less pay postage, what with all the banks kinda-sorta losing our money these days–so we blast a few emails. We don’t have time to talk, so we text. We don’t have time to text to specific people, so we update our Facebook status. We don’t have time to write essays, so we blog.</p>
      </section>

      <div className="vision-mission-container">
        <section className="vision">
          <img src={visionIcon} alt="Our Vision" />
          <h2>Our Vision</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </section>
        <section className="mission">
          <img src={missionIcon} alt="Our Mission" />
          <h2>Our Mission</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </section>
      </div>

      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="member">
          <img src={Dino} alt="Team Member"/>
            <h3>John Varghese</h3>
            <p>Director</p>
          </div>
          <div className="member">
          <img src={Dino} alt="Team Member"/>
            <h3>Varun V</h3>
            <p>CFO</p>
          </div>
          <div className="member">
          <img src={Dino} alt="Team Member"/>
            <h3>Saran N</h3>
            <p>CEO</p>
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
      </section>
    </div>
  );
}

export default AboutUs;

