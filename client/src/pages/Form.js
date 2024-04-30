import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './css/Form.css';

const RentForm = ({ onSubmit }) => {
  const [showAdditionalForm, setShowAdditionalForm] = useState(false);
  const [Submitting, setSubmitting] = useState(false);
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
            setShowAdditionalForm(true);
          } else {
            onSubmit(values);
            setShowAdditionalForm(false);
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
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
                <option value="car1">Car 1</option>
                <option value="car2">Car 2</option>
                <option value="car3">Car 3</option>
              </Field>
              <ErrorMessage name="vehicle" component="div" className="error" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : showAdditionalForm ? 'Submit Request' : 'Next'}
            </button>
            {showAdditionalForm}
          </Form>
        )}
      </Formik>

      {showAdditionalForm && (
        <div className="additional-form-container">
          <button
                type="button"
                onClick={() => {
                  setShowAdditionalForm(false);
                  setSubmitting(false);
                }
              }
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
              onSubmit(values);
              setShowAdditionalForm(false);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
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

                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </div>
  );
};

export default RentForm;
