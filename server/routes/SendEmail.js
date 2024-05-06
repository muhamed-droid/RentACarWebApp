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



    const mailOptions = {
      from: process.env.USER,
      to: email,
      subject: 'Your Car Rental Request',
      text: `Dear ${name} ${surname},\n\nThank you for your car rental request. Someone will get in touch with as soon as possible.
      \n\nDetails:\nStart Date: ${startDate}\nEnd Date: ${endDate}\nVehicle: ${vehicle}\n\nBest regards,\nYour Company`
    };

    const mailOptions2 = {
      from: process.env.USER,
      to: process.env.USER,
      subject: 'You have a Car Rental Request',
      text: `Hello KFZ Hampi, ${name} ${surname} has sent a car rental request. He requested the rent from ${startDate} to ${endDate}. Here are the information below:\n 
      Name of the customer ${name} ${surname}\n
      Email of the customer ${email}\n
      Phone number of the customer ${number}\n
      Start date: ${startDate}\n
      End date: ${endDate}\n`
    };
  
    try {
      await transporter.sendMail(mailOptions);
      try{
        await transporter.sendMail(mailOptions2);
        res.status(200).json({ message: 'Email sent successfully!' });
      } catch (error) {
        throw error;
      }
    } catch (error) {
      console.error('Error sending email:', error.message); // Log the error message specifically
      res.status(500).json({ message: `Error sending email: ${error.message}` }); // Return detailed error message
    }
  });
  

module.exports = router;
