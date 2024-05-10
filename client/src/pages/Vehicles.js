import React, { useState, useEffect } from 'react';
import axios from "axios";
import './css/Vehicles.css'; // Make sure the path is correct
import Form from './Form.js';

function Vehicles({ onVehicleClick }) {
  const [vehiclesState, setVehiclesState] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [filter, setFilter] = useState('');
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [showSortOptions, setShowSortOptions] = useState(false);

  // Fetch vehicles data
  useEffect(() => {
    axios.get(`http://localhost:3001/vehicles`)
      .then((response) => {
        setVehiclesState(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the vehicles data:', error);
      });
  }, []);

  // Filter and sort vehicles
  useEffect(() => {
    let updatedVehicles = [...vehiclesState];

    // Filter based on vehicle type
    if (filter === 'LKW') {
      updatedVehicles = updatedVehicles.filter(vehicle => vehicle.lkw === true);
    } else if (filter === 'PKW') {
      updatedVehicles = updatedVehicles.filter(vehicle => vehicle.lkw === false);
    }

    // Sort vehicles
    if (sortConfig.key) {
      updatedVehicles.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }

    setFilteredVehicles(updatedVehicles);
  }, [filter, sortConfig, vehiclesState]);

  function handleModelFilterChange(event) {
    setFilter(event.target.value);
  }

  const toggleSortOptions = () => {
    setShowSortOptions(!showSortOptions);
  };
  
  const sortBy = (key, direction) => {
    setSortConfig({ key, direction });
    setShowSortOptions(false);
  };
  
  return (
    <div className='vozila'>
      <div className="vehicle-form">
        <div className="left-content">
          <div className="vehicle-cards">
            {filteredVehicles.map((value) => (
              <div className="vehicle-card" onClick={() => onVehicleClick(value)} key={value.id}>
                <div className="name">{value.manufacturer}</div>
                <div className="model">{value.model}</div>
                <div className="description">{value.description}</div>
                <img src={`./photos/${value.image_name}`} alt="vehicle" className="vehicle-image" />
                <div className="price">{value.price} €/tag</div>
               </div>
            ))}
          </div>
        </div>
        <div className="right-content">
          <div className="filter">
            <select id="model" onChange={handleModelFilterChange}>
              <option value="">All Models</option>
              <option value="LKW">LKW</option>
              <option value="PKW">PKW</option>
            </select>
          </div>
          <div className="sort-container">
            <button className="sort-button" onClick={toggleSortOptions}>Sort by</button>
            {showSortOptions && (
              <div className="sort-options">
                <button className="sort-option" onClick={() => sortBy('price', 'ascending')}>Price (Ascending)</button>
                <button className="sort-option" onClick={() => sortBy('price', 'descending')}>Price (Descending)</button>
                <button className="sort-option" onClick={() => sortBy('manufacturer', 'ascending')}>Name (Ascending)</button>
                <button className="sort-option" onClick={() => sortBy('manufacturer', 'descending')}>Name (Descending)</button>
                <button className="sort-option" onClick={() => sortBy('year', 'ascending')}>Year (Ascending)</button>
                <button className="sort-option" onClick={() => sortBy('year', 'descending')}>Year (Descending)</button>
              </div>
            )}
          </div>
          <div className='form'>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vehicles;
