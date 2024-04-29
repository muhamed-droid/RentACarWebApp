import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Home() {

    const [listOfVehicles, setListOfVehicles] = useState([]);

    function handleClick() {
      <Link to='/vehicle/${value.id}'> Vehicle is here</Link>
    }

  useEffect(() => {
    axios.get("http://localhost:3001/vehicles").then((response)=> {
      setListOfVehicles(response.data);
    });
  }, []);

  


  return (
    <div>
      {listOfVehicles.map( (value,key) => {
        return <div className="vehicles" onClick={handleClick}> 
        <div className="name"> {value.name} </div> 
        <div className="body"> {value.description} </div> 
        <div className="price"> {value.price} </div>
      </div>})}
    </div>
  ) 
} 

export default Home 


