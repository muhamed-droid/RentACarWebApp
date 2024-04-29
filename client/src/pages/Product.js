import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

function Vehicle() {
        let {id} = useParams(); 

        const [productObject, setProductObject] = useState({});

        useEffect(() => {
            axios.get(`http://localhost:3001/products/byId/${id}`).then((response)=> { 
                setProductObject(response.data);
             });
          }, []);

  return (
    <div>
        {productObject.description}
    </div>
  )
}

export default Vehicle
