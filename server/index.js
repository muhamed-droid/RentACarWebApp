const express = require('express');
const app = express();
const cors=require('cors');

const db = require('./models');

app.use(cors());
app.use(express.json());

//Routers 

const productsRouter = require ('./routes/Vehicles');

app.use("/vehicles", productsRouter);


db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
  }).catch((error) => {
    console.error('Error syncing database:', error);
  });




