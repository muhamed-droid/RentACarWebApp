import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Vehicles from './Vehicles';
import Modal from '../Modal.js';
import './css/Home.css';
import Map from './Map.js';
import AllRightsReserved from './AllRightsReserved.js';
import FAQ from './FAQ.js';
import ButtonToTop from './ButtonToTop.js';
import Footer from './Footer.js';
import naslovna from '../photos/naslovna.jpg';
import VehiclesNavbar from './VehiclesNavbar.js';

function Home() {
  const [listOfVehicles, setListOfVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3001/vehicles")
      .then(response => {
        setListOfVehicles(response.data);
      });
  }, []);

  const handleVehicleClick = vehicle => {
    setSelectedVehicle(vehicle);
  };

  const handleCloseModal = () => {
    setSelectedVehicle(null);
  };



  return (
  

    <div className='home-container'>
      <Navbar />
      <div className='home-content'>
      <div className="vehicles-navbar">
      <VehiclesNavbar/>
      </div>
    
      
        <Vehicles vehicles={listOfVehicles} onVehicleClick={handleVehicleClick} />
        {selectedVehicle && (
          <Modal show={true} handleClose={handleCloseModal}>
            <h3>{selectedVehicle.manufacturer} {selectedVehicle.model}</h3>
            <p>Year: {selectedVehicle.year}</p>
            <p>Fuel Type: {selectedVehicle.type_of_fuel}</p>
            <p>Transmission: {selectedVehicle.transmission}</p>
            <p>Kilometer: {selectedVehicle.kilometer}</p>
            <p>Price: {selectedVehicle.price}</p>
            <p>Additional Description: {selectedVehicle.additional_description}</p>
            <img className="slika" src={`photos/${selectedVehicle.image_name}`} alt="Vehicle" />
          </Modal>
        )}
      <img className='naslovna-img' src={naslovna} alt="Naslovna"/>
        <div>
          <ButtonToTop/>
        </div>
        <div className='FAQ'>
          <FAQ/>
        </div>
        <div className="google-map"> 
          <Map></Map>
        </div>
        <div className="footer">
          <Footer></Footer>
        </div>
        <div className='allRightsReserved'>
          <AllRightsReserved/> 
        </div>
      </div>
    </div>
  );
}

export default Home;
