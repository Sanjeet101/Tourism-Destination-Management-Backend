const express = require('express');
const router = express.Router();
const Customers = require('../models/customersModel');
router.post('/customers/insert', function(req,res){
    const fullname = req.body.fullname;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const phone = req.body.phone;
    const date_of_birth = req.body.date_of_birth;
    const address = req.body.address;
    const data = new Customers({
        fullname : fullname,
        email : email,
        username : username,
        password : password,
        phone : phone,
        date_of_birth : date_of_birth,
        address : address
    })
    data.save();
    res.send("customers registered")
})
router.get('/customers/fetch', function(req,res){
    Customers.find().then(function(customersdata){
        res.send(customersdata)
    })
})
module.exports = router;
