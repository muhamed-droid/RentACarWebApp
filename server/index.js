require('dotenv').config();
const express = require('express');
const app = express();
const cors=require('cors');

const db = require('./models');

//Middleware
app.use(cors());
app.use(express.json());

//Routers 

const sendEmailRouter = require ('./routes/SendEmail');
const vehiclesRouter = require ('./routes/Vehicles');

app.use("/vehicles", vehiclesRouter);
app.use("/sendemail", sendEmailRouter);


db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
  }).catch((error) => {
    console.error('Error syncing database:', error);
  });




