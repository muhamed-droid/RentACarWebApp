import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import './css/Home.css'
import Vehicles from "./Vehicles";

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
    <div className='home'>
    <div className='navbar'>
      <Navbar></Navbar>
    </div>
    <div className='vozila'>
      <Vehicles></Vehicles>
    </div>
    </div>

  ) 
} 

export default Home 


