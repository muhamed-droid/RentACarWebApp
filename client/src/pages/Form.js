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

const RentForm = () => {
  const [showAdditionalForm, setShowAdditionalForm] = useState(false);
  const [submissionComplete, setSubmissionComplete] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [vehicles, setVehicles] = useState([]);
  const [initialFormValues, setInitialFormValues] = useState({
    startDate: '',
    endDate: '',
    vehicle: ''
  });

  useEffect(() => {
    const getVehicles = async () => {
      const data = await fetchVehicles();
      setVehicles(data);
    };
    getVehicles();
  }, []);

  const today = new Date().toISOString().split('T')[0];

  const handleFinalSubmit = async (values, { setSubmitting }) => {
    //setSubmitting(true);

    // Merge both forms' data
    const finalValues = {
      ...initialFormValues,
      ...values
    };
  
    try {
      const response = await fetch('http://localhost:3001/sendemail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalValues)
      });
  
      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the email.');
    }
  
    //setSubmitting(false);
    //setShowAdditionalForm(false);
  };

  return (
    <div className="form-container">
      <h2>Rent a Car</h2>
      <Formik
        initialValues={initialFormValues}
        validationSchema={Yup.object().shape({
          startDate: Yup.date()
            .min(today, 'Start date cannot be before today')
            .required('Start date is required'),
          endDate: Yup.date()
            .min(Yup.ref('startDate'), 'End date must be after start date')
            .required('End date is required'),
          vehicle: Yup.string().required('Vehicle is required')
        })}
        onSubmit={(values, { setSubmitting }) => {
          setInitialFormValues(values);

          if (!showAdditionalForm) {
            setShowAdditionalForm(true);
            setSubmitting(false);
          } else {
            handleFinalSubmit(values, { setSubmitting });
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="startDate">Start Date</label>
              <Field
                type="date"
                name="startDate"
                min={today} // Prevent past dates selection
                className={errors.startDate && touched.startDate ? 'invalid-date' : ''}
              />
              <ErrorMessage name="startDate" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="endDate">End Date</label>
              <Field
                type="date"
                name="endDate"
                min={today} // Prevent past dates selection
                className={errors.endDate && touched.endDate ? 'invalid-date' : ''}
              />
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
            onSubmit={handleFinalSubmit}
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
            onClick={() => setSubmissionComplete(false)}
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
