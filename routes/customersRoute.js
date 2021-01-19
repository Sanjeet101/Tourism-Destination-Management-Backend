const express = require('express');
const router = express.Router();
const Customers = require('../models/customersModel');
const {check, validationResult} = require('express-validator');
const brcyptjs = require('bcryptjs');
router.post('/customers/insert',[
    check('email',"Email is required!").not().isEmpty(),
    check('username', "It is not valid username").isAlpha()
], function(req,res){
    const errors = validationResult(req);
    if(errors.isEmpty()){
        const fullname = req.body.fullname;
        const email = req.body.email;
        const username = req.body.username;
        const password = req.body.password;
        const phone = req.body.phone;
        const date_of_birth = req.body.date_of_birth;
        const address = req.body.address;
        brcyptjs.hash(password, 10, function(err, hash){
            const data = new Customers({
                fullname : fullname,
                email : email,
                username : username,
                password : hash,
                phone : phone,
                date_of_birth : date_of_birth,
                address : address
            })
        data.save();
        })
    }
else{
    res.send(errors.array())
    }
})
router.get('/customers/fetch', function(req,res){
    Customers.find().then(function(customersdata){
        res.send(customersdata)
    })
})
module.exports = router;
