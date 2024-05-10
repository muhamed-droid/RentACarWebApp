import React, { useState } from 'react';
import './css/Contact.css';
import Navbar from './Navbar';
import './css/Home.css';
import Map from './Map';
import AllRightsReserved from './AllRightsReserved';
import ButtonToTop from './ButtonToTop';
import Footer from './Footer';
import Logo from '../photos/logo.png'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch('http://localhost:3001/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email.');
      }
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while sending the email.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className='contact'>
      <Navbar />
      <div className='glava'>
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" disabled={submitting} className="contact-button">Submit</button>
        </form>
      ) : (
        <div className="submitted-message">
          <p>Thank you for your message!</p>
        </div>
      )}
    </div>
      <div className='informa'>
      <h2>Kontakt informacije</h2>
        <p>Unsere Lokation: Italiener Straße 70, Villach, Österreich</p>
        <p>Telefon: +436607700543</p>
        <p>Email: dinomatoruga17@gmail.com</p>
        <p>Radno vrijeme: Ponedjeljak-Petak: 09-18h, Subota: 09-15h</p>
        <img src={Logo} alt="Logo" />
    </div>
    </div>
    <div className='google-map'>
      <Map/>
    </div>
    <div>
      <ButtonToTop/>
    </div>
    <div> 
      <Footer/>
    </div>
    <div className='allRightsReservedx'>
      <AllRightsReserved/>
    </div>
    </div>
  );
};

export default Contact;
