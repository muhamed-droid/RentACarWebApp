import React, { useState, useEffect } from 'react';
import axios from "axios";
import './css/Vehicles.css'; // Provjeri da li je putanja ispravna
import Form from './Form.js';

function Vehicles({ onVehicleClick }) {
  const [vehiclesState, setVehiclesState] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [filter, setFilter] = useState('');
  const [modelFilter, setModelFilter] = useState('');
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [selectedSort, setSelectedSort] = useState(null);
  const [selectedSortKey, setSelectedSortKey] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/vehicles`).then((response) => {
      setVehiclesState(response.data);
    });
  }, []);

  useEffect(() => {
    if (filter === 'LKW') {
      setFilteredVehicles(vehiclesState.filter(vehicle => vehicle.lkw === true));
    } else if (filter === 'PKW') {
      setFilteredVehicles(vehiclesState.filter(vehicle => vehicle.lkw === false));
    } else {
      setFilteredVehicles(vehiclesState);
    }
  }, [filter, vehiclesState]);

  function handleModelFilterChange(event) {
    setFilter(event.target.value);
  }

  const toggleSortOptions = () => {
    setShowSortOptions(!showSortOptions);
  };

  const sortBy = (key, direction) => {
    setSortConfig({ key, direction });
    setShowSortOptions(false);
    setSelectedSort(`${key} (${direction})`);
    setSelectedSortKey(null);
  };

  return (
    <div className='vozila'>
      <div className="left-content">
        <div className="vehicle-cards">
          {filteredVehicles.map((value, key) => (
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
  );
}

export default Vehicles;
