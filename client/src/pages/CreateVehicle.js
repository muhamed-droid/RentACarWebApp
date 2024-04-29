import React from 'react';
import { Formik, Form, Field, ErrorMessage} from "formik";
import './CreateVehicle.css';
import axios from "axios";
import * as Yup from 'yup';

function CreateVehicle() {

    const initialValues = {
        name:"",
        description:"",
        price:""
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3).max(30).required(),
        description: Yup.string(),
        price: Yup.number().required()
    });

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/vehicles", data).then((response)=> {
        console.log("It's working, it's woorkiing!!!");});
    };

  return (
    <div className="createVehiclePage">
       <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
  {({ handleSubmit, setFieldValue }) => (
    <Form className="formContainer" onSubmit={handleSubmit}> 
      <div>
        <label htmlFor="name">Name:</label>
        <ErrorMessage name="name" component="span"/>
        <Field autocomplete="off" id="inputCreateVehicle" name="name" placeholder="(Ex. Honey...)"/>    
      </div>
      
      <div>
        <label htmlFor="description">Description:</label>
        <ErrorMessage name="description" component="span"/>
        <Field autocomplete="off" id="inputCreateVehicle" name="description" placeholder="(Ex. Honey from the deepest of Bosnian...)"/>    
      </div>

      <div>
        <label htmlFor="price">Price:</label>
        <ErrorMessage name="price" component="span"/>
        <Field autocomplete="off" id="inputCreateVehicle" name="price" placeholder="(Ex. 20.0...)"/>  
      </div>

      <div>
        <label htmlFor="photo">Add a photo here:</label>
        <ErrorMessage name="photo" component="span"/>
        <input
          type="file"
          accept="image/*"
          id="photoInput"
          name="photo"
          style={{ display: 'none' }}
          onChange={(event) => {
            setFieldValue("photo", event.currentTarget.files[0]);
            document.getElementById("selectedFileName").innerText = event.currentTarget.files[0].name;
          }}
        />
        <label htmlFor="photoInput" id="photoInputLabel" className="photoInputLabel">Choose a file</label>
        <span id="selectedFileName" className="selectedFileName"></span>
      </div>

      <button type="submit">Create Vehicle</button>  
    </Form>
  )}
</Formik>

    </div>
  )
}

export default CreateVehicle;
