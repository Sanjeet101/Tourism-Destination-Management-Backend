const express = require('express');
const router = express.Router();
const Customers = require('../models/customersModel');
const { check, validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs'); // for pw encryption
const authCustomer = require('../middleware/authCustomer');
const jwt = require('jsonwebtoken')
// register for customer route
router.post('/customers/insert', [
    check('email', "Email is required!").not().isEmpty(),], function (req, res) {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            const name = req.body.name;
            const username = req.body.username;
            const email = req.body.email;
            const password = req.body.password;
            const accountType = req.body.accountType;
            bcryptjs.hash(password, 10, function (err, hash) {
                const data = new Customers({
                    name: name,
                    username: username,
                    email: email,
                    password: hash,
                    accountType: accountType
                })
                data.save()
                    .then(function (result) {
                        res.status(201).json({ success: true, message: "Customer successfully registered!" })
                    }).catch(function (e) {
                        res.status(500).json({ success: false, messgae: e })
                    })
            })
        }
        else {
            res.status(400).json(errors.array())
        }
    })
// end of register route

// login route for customer
router.post('/customers/login', function (req, res) {
    Customers.findOne({ email: req.body.email })
        .then(function (customerData) {
            if (customerData == null) {
                console.log(customerData)
                return res.status(401).json({ message: "Please enter a valid email" })
            }
            bcryptjs.compare(req.body.password, customerData.password, function (err, cresult) {
                if (cresult === false) {
                    return res.status(401).json({ success: false, message: "Authentication failed" })
                }


                const token = jwt.sign({ CustomerId: customerData._id }, 'secretkey')

                res.status(200).json({ success: true, message: "Auth success", token: token, accountType: customerData.accountType })
            })
        })
        .catch()
})
// end of login route
module.exports = router;
