import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Vehicles from './Vehicles';
import Modal from '../Modal.js';
import './css/Home.css';
import Form from './Form.js';

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
            <img src={`photos/${selectedVehicle.image_name}`} alt="Vehicle" />
          </Modal>
        )}
        <div className='form'>
          <Form></Form>
        </div>
      </div>
    </div>
  );
}

export default Home;
