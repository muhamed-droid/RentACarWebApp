import React, { useState, useEffect } from 'react';
import axios from "axios";
import './css/Vehicles.css';

function Vehicles({ onVehicleClick }) {
  const [vehiclesState, setVehiclesState] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [modelFilter, setModelFilter] = useState('');
  const [uniqueModels, setUniqueModels] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/vehicles`).then((response)=> { 
      setVehiclesState(response.data);
    });
  }, []);

  useEffect(() => {
    const uniqueModelsList = Array.from(new Set(vehiclesState.map(vehicle => vehicle.model)));
    setUniqueModels(uniqueModelsList);
  }, [vehiclesState]);

  useEffect(() => {
    const filtered = vehiclesState.filter(vehicle => vehicle.model.includes(modelFilter));
    setFilteredVehicles(filtered);
  }, [modelFilter, vehiclesState]);

  const sortBy = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handleModelFilterChange = (event) => {
    setModelFilter(event.target.value);
  };

  const sortedVehicles = [...filteredVehicles].sort((a, b) => {
    if (sortConfig.direction === 'ascending') {
      return a[sortConfig.key] < b[sortConfig.key] ? -1 : 1;
    } else {
      return a[sortConfig.key] > b[sortConfig.key] ? -1 : 1;
    }
  });

  return (
    <div className='vozila'>

       <h2 class="question-box">Suchen Sie ein Fahrzeug? Hier sind Sie richtig.</h2>

      <div className="sort-buttons">
        <button className="sort-button" onClick={() => sortBy('price')}>Sort by Price</button>
        <button className="sort-button" onClick={() => sortBy('manufacturer')}>Sort by Name</button>
        <button className="sort-button" onClick={() => sortBy('year')}>Sort by Year</button>
      </div>
      <div className="filter">
        <label htmlFor="model">Model:</label>
        <select id="model" onChange={handleModelFilterChange}>
          <option value="">All Models</option>
          {uniqueModels.map((model, index) => (
            <option key={index} value={model}>{model}</option>
          ))}
        </select>
      </div>
      <div className="vehicle-cards">
        {sortedVehicles.map((value, key) => (
          <div className="vehicle-card" onClick={() => onVehicleClick(value)} key={key}>
            <div className="name">{value.manufacturer}</div>
            <div className="model">{value.model}</div>  
            <div className="description">{value.description}</div>
            <div className="price">{value.price} €/tag</div>
            <img src={`./photos/${value.image_name}`} alt="vehicle" className="vehicle-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vehicles;
