import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

function Vehicle() {
        let {id} = useParams();

        const [vehicleObject, setVehicleObject] = useState({});

        useEffect(() => {
            axios.get(`http://localhost:3001/vehicles/byId/${id}`).then((response)=> { 
                setVehicleObject(response.data);
             });
          }, []);
          console.log(vehicleObject);

  return (
    <div>
        <div className="vehicle-details">
            <h3>{vehicleObject.manufacturer} {vehicleObject.model}</h3>
            <p>Year: {vehicleObject.year}</p>
            <p>Fuel Type: {vehicleObject.type_of_fuel}</p>
            <p>Transmission: {vehicleObject.transmission}</p>
            <p>Kilometer: {vehicleObject.kilometer}</p>
            <p>Price: {vehicleObject.price}</p>
            <p>Additional Description: {vehicleObject.additional_description}</p>
            <img src={`photos/${vehicleObject.image_name}`} alt="Vehicle" />
          </div>
    </div>
  )
}

export default Vehicle
