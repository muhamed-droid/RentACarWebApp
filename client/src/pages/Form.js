import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './css/Form.css';

const RentForm = ({ onSubmit }) => {
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
          onSubmit(values);
          setSubmitting(false);
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
              {isSubmitting ? 'Sending...' : 'Send Request'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RentForm;
