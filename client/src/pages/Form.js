import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './css/Form.css';

const fetchVehicles = async () => {
  try {
    const response = await fetch('http://localhost:3001/vehicles');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    return [];
  }
};

const RentForm = ({ onSubmit }) => {
  const [showAdditionalForm, setShowAdditionalForm] = useState(false);
  const [submissionComplete, setSubmissionComplete] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const getVehicles = async () => {
      const data = await fetchVehicles();
      setVehicles(data);
    };
    getVehicles();
  }, []);

  const handleFinalSubmit = (values, { setSubmitting }) => {
    //onSubmit(values);
    //setShowAdditionalForm(false); // Zatvara drugu formu
    //setSubmissionComplete(true); // Pokazuje popup
    //setSubmitting(false);
  };

  return (
    <div className="form-container">
      <h2>Rent a Car</h2>
      <Formik
        initialValues={{
          startDate: '',
          endDate: '',
          vehicle: ''
        }}
        validationSchema={Yup.object().shape({
          startDate: Yup.date().required('Start date is required'),
          endDate: Yup.date()
            .required('End date is required')
            .min(Yup.ref('startDate'), 'End date must be after start date'),
          vehicle: Yup.string().required('Vehicle is required')
        })}
        onSubmit={(values, { setSubmitting }) => {
          if (!showAdditionalForm) {
            //setSubmissionComplete(false);
            setShowAdditionalForm(true);
            //setSubmitting(false);
          } else {
            handleFinalSubmit(values, { setSubmitting });
          }
        }}
      >
        {() => (
          <Form>
            <div className="form-group">
              <label htmlFor="startDate">Start Date</label>
              <Field type="date" name="startDate" />
              <ErrorMessage name="startDate" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="endDate">End Date</label>
              <Field type="date" name="endDate" />
              <ErrorMessage name="endDate" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="vehicle">Vehicle</label>
              <Field as="select" name="vehicle">
                <option value="">Select a vehicle</option>
                {vehicles.map(vehicle => (
                  <option key={vehicle.id} value={vehicle.name}>
                    {vehicle.manufacturer + ' ' + vehicle.model + ' ' + vehicle.year}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="vehicle" component="div" className="error" />
            </div>

            <button type="submit" disabled={submitting}>
              {submitting ? 'Sending...' : showAdditionalForm ? 'Submit Request' : 'Next'}
            </button>
          </Form>
        )}
      </Formik>

      {showAdditionalForm && (
        <div className="additional-form-container">
          <button
            type="button"
            onClick={() => {
              setShowAdditionalForm(false);
              //setSubmissionComplete(false);
            }}
            className="close-button"
          >
            X
          </button>
          <h2>Additional Information</h2>
          <Formik
            initialValues={{
              name: '',
              surname: '',
              email: '',
              number: ''
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string().required('Name is required'),
              surname: Yup.string().required('Surname is required'),
              email: Yup.string().email('Invalid email').required('Email is required'),
              number: Yup.string().required('Number is required')
            })}
            onSubmit={(values, { setSubmitting }) => {
              setShowAdditionalForm(false);
              setSubmissionComplete(true);
              //handleFinalSubmit(values, { setSubmitting });
            }}
          >
            {() => (
              <Form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <Field type="text" name="name" />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>

                <div className="form-group">
                  <label htmlFor="surname">Surname</label>
                  <Field type="text" name="surname" />
                  <ErrorMessage name="surname" component="div" className="error" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field type="email" name="email" />
                  <ErrorMessage name="email" component="div" className="error" />
                </div>

                <div className="form-group">
                  <label htmlFor="number">Number</label>
                  <Field type="tel" name="number" />
                  <ErrorMessage name="number" component="div" className="error" />
                </div>

                <button type="submit" disabled={submitting}>
                  {submitting ? 'Sending...' : 'Submit'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      )}

      {submissionComplete && (
        <div className="popup">
          <p>Submission Complete! Your request has been successfully sent.</p>
          <button
            type="button"
            onClick={() => {
              setSubmissionComplete(false);
            }}
            className="close-button"
          >
            OK
          </button>
        </div>
      )}
    </div>
  );
};

export default RentForm;
