require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const router = express.Router();

// Konfiguracija transporter objekta za slanje emaila
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Možeš koristiti i druge servise (npr. 'SMTP')
  auth: {
    user: process.env.USER,
    pass: process.env.APP_PASSWORD
  }
});

// POST endpoint za obradu forme
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  
  // Opcije emaila
  const mailOptions = {
      from: process.env.USER, // Tvoj Gmail email
      to: 'femfemba@gmail.com', // Email primaoca
      subject: 'New Message from Contact Form',
      text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
      `
    };
    
    try {
    // Slanje emaila
    await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully');
    res.status(200).send('Message received successfully!'); // Opciono: pošalji potvrdu klijentu da je poruka primljena
} catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('An error occurred while sending the email.'); // Pošalji grešku klijentu ako nešto pođe po zlu
  }
});

module.exports=router;
