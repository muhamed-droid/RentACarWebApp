require('dotenv').config();
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Initialize nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER,
    pass: process.env.APP_PASSWORD
  }
}); 

// POST route to send email
router.post('/', async (req, res) => {
    const { name, surname, email, number, startDate, endDate, vehicle } = req.body;
    console.log(name, surname, email, number, startDate, endDate, vehicle);



    const mailOptions = {
      from: process.env.USER,
      to: email,
      subject: 'Your Car Rental Request',
      text: `Dear ${name} ${surname},\n\nThank you for your car rental request.\n\nDetails:\nStart Date: ${startDate}\nEnd Date: ${endDate}\nVehicle: ${vehicle}\n\nBest regards,\nYour Company`
    };
  
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error.message); // Log the error message specifically
      res.status(500).json({ message: `Error sending email: ${error.message}` }); // Return detailed error message
    }
  });
  

module.exports = router;
