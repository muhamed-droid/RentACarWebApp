import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import './css/Vehicles.css';

function Home() {

    const [listOfVehicles, setListOfVehicles] = useState([]);

    function handleClick() {
      //Code to handle on click
    }

  useEffect(() => {
    axios.get("http://localhost:3001/vehicles").then((response)=> {
      setListOfVehicles(response.data);
    });
  }, []);

  


  return (
    <div className='vozila'>
      {listOfVehicles.map( (value,key) => {
        return <div className="vehicles" onClick={handleClick}> 
        <div className="name"> {value.name} </div> 
        <div className="body"> {value.description} </div> 
        <div className="price"> {value.price} </div>
        <img src={`../photos/${value.image_name}`} alt="vehicle" className="vehicle-image" />
      </div>})}
    </div>

  ) 
} 

export default Home 


