import React, { useState } from 'react';
import './css/Contact.css'; // Stilizacija može biti u odvojenom CSS fajlu
import Navbar from './Navbar';
import './css/Home.css'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ovdje možeš implementirati logiku slanja forme (npr. poziv API-ju za slanje emaila)
    console.log(formData);
    // Nakon što se forma pošalje, možeš očistiti polja forme
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className='contact'>
        <Navbar />
    <div className="contact-us-container">
      <h2>Contact Us</h2>
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
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default ContactUs;
