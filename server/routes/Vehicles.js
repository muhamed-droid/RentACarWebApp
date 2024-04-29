const express = require('express');
const router = express.Router();
const {Vehicles} = require("../models");


router.get("/", async (req, res) => {
    const listOfVehicles = await Vehicles.findAll();
    res.json(listOfVehicles);
});

router.get('/byId/:id', async (req, res) => {
    const id = req.params.id;
    const vehicle = await Vehicle.findByPk(id);
    res.json(vehicle);
})

router.post("/", async (req, res) => {
   const vehicle = req.body;
    await Products.create(vehicle);
    res.json(vehicle);
});

module.exports = router;