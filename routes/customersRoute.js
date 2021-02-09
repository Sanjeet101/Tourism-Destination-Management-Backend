const express = require('express');
const router = express.Router();
const Customers = require('../models/customersModel');
const {check, validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs'); // for pw encryption
const authCustomer = require('../middleware/authCustomer');
const jwt = require('jsonwebtoken')
// register for customer route
router.post('/customers/insert',[
    check('email',"Email is required!").not().isEmpty(),], function(req,res){
    const errors = validationResult(req);
    if(errors.isEmpty()){
        const fullname = req.body.fullname;
        const email = req.body.email;
        const username = req.body.username;
        const password = req.body.password;
        const phone = req.body.phone;
        const address = req.body.address;
        const accountType = req.body.accountType;
        bcryptjs.hash(password, 10, function(err, hash){
            const data = new Customers({
                fullname : fullname,
                email : email,
                username : username,
                password : hash,
                phone : phone,
                address : address,
                accountType : accountType
            })
        data.save()
        .then(function(result){
            res.status(201).json({message : "Customer Registered Success!!" })

        })
        .catch(function(error){
            res.status(500).json({message : error })
        })
        })
}
else
{
    res.status(400).json(errors.array())
    }
})
// end of register route

// login route for customer
router.post('/customers/login', function(req,res){
    Customers.findOne({email : req.body.email})
    .then(function(customerData){
        if(customerData === null){
            return res.status(401).json({message : "Authentication Failed!!" })
        }
        bcryptjs.compare(req.body.password, customerData.password, function(error, cresult){
            if(cresult === false){
            return res.status(401).json({message:"Customer Auth Failed!!!"})
            }
           //token
            const token = jwt.sign({CustomerId : customerData._id}, 'secretkey');
            res.status(200).json({message : "Customer Auth Success", token : token})
        })
    })
    .catch()
})
// end of login route
module.exports = router;
