const express = require('express');
const router = express.Router();
const {Vehicles} = require("../models");


router.get("/", async (req, res) => {
    const listOfVehicles = await Vehicles.findAll();
    res.json(listOfProducts);
});

router.get('/byId/:id', async (req, res) => {
    const id = req.params.id;
    const vehicle = await Vehicle.findByPk(id);
    res.json(product);
})

router.post("/", async (req, res) => {
   const product = req.body;
    await Products.create(product);
    res.json(product);
});

module.exports = router;