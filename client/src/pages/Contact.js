import React, { useState } from 'react';
import './css/Contact.css';
import Navbar from './Navbar';
import './css/Home.css';
import Map from './Map';
import AllRightsReserved from './AllRightsReserved';
import ButtonToTop from './ButtonToTop';
import Footer from './Footer';
import Logo from '../photos/logo.png'
import '@fortawesome/fontawesome-free/css/all.css';
import FAQ from './FAQ';

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
      <div className='informa'>
      <h2>Kontaktinformationen</h2>
        <p>Lokation: <i class="fa-solid fa-location-dot"></i> Italiener Straße 70, Villach, Österreich</p>
        <p>Telefon: <i class="fa-solid fa-phone"></i> +436607700543</p>
        <p>Email: <i class="fa-regular fa-envelope"></i> dinomatoruga17@gmail.com</p>
        <p>Arbeitszeit: <i class="fa-solid fa-clock"></i> Montag-Freitag: 09-18h, Samstag: 09-15h</p>
        <FAQ/>
    </div>
    <div className="contact-us-container">
    <div className='informa'>
      <h2>Habe Fragen? Schicken Sie uns eine E-Mail.</h2>
        <p>Wir sind eine branchenführende Publikation, die die neuesten Nachrichten und Erkenntnisse über SEO, Suche und deren Auswirkungen auf Ihr Unternehmen und Ihre Karriere bietet.
</p>
        <p>Haben Sie eine Frage an uns oder Feedback? Klicken Sie bitte auf die am besten geeignete Kategorie und füllen Sie das Formular aus, um uns zu erreichen.</p>
        <img src={Logo} alt="Logo" />
    </div>
    <div className='contact-forma'>
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
