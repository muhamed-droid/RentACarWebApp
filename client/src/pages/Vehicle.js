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

  return (
    <div>
        {vehicleObject.additional_description}
    </div>
  )
}

export default Vehicle
