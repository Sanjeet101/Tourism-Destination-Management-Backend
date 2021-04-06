const express = require('express');
const router = express.Router();
const Booking = require('../models/bookingModel');
const { check, validationResult } = require('express-validator');
const authCustomer = require('../middleware/authCustomer');
const jwt = require('jsonwebtoken')

router.post('/booking/submit', function (req, res) {

    const errors = validationResult(req);
    if (errors.isEmpty()) {
        const fullname = req.body.fullname;
        const email = req.body.email;
        const username = req.body.username;
        const destination = req.body.destination;
        const no_of_people = req.body.no_of_people;
        const departure = req.body.departure;
        const arrival = req.body.arrival;
        const phone = req.body.phone;

        const data = new Booking({
            fullname: fullname,
            email: email,
            username: username,
            destination: destination,
            no_of_people: no_of_people,
            departure: departure,
            arrival: arrival,
            phone: phone


        })
        data.save()
            .then(function (result) {
                res.status(201).json({ message: "Booking Success!!!" })

            })
            .catch(function (error) {
                res.status(500).json({ message: error })
            })
    }
    else {
        res.status(400).json(errors.array())
    }
})
//delete
router.delete('/booking/delete/:id', authCustomer.verifyAdmin, function (req, res) {
    const id = req.params.id;
    Booking.deleteOne({ _id: id })
        .then(function (result) {
            res.status(200).json({ message: "Booking deleted!!" })
        })
        .catch(function (error) {
            res.status(500).json({ message: error })
        })
})
//update
router.put('/booking/update/:id', authCustomer.verifyAdmin, function (req, res) {
    const id = req.params.id;
    const fullname = req.body.fullname;
    const email = req.body.email;
    const username = req.body.username;
    const destination = req.body.destination;
    const no_of_people = req.body.no_of_people;
    const departure = req.body.departure;
    const arrival = req.body.arrival;
    const phone = req.body.phone;


    Booking.updateOne({ _id: id }, { fullname: fullname, email: email, username: username, destination: destination, no_of_people: no_of_people, departure: departure, arrival: arrival, phone: phone })
        .then(function (result) {
            res.status(200).json({ message: "Booking Updated" })
        })
        .catch(function (error) {
            res.send().json({ error: error })
        })

})
module.exports = router;