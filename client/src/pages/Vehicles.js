import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import './css/Vehicles.css';

function Vehicles({ vehicles, onVehicleClick }) {
  return (
    <div className='vozila'>
      {vehicles.map((value, key) => (
        <div className="vehicle-card" onClick={() => onVehicleClick(value)} key={key}>
          <div className="name">{value.manufacturer}</div>
          <div className="model">{value.model}</div>  
          <div className="description">{value.description}</div>
          <div className="price">{value.price}</div>
          <img src={`./photos/${value.image_name}`} alt="vehicle" className="vehicle-image" />
        </div>
      ))}
    </div>
  );
}

export default Vehicles 


