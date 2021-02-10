const express = require('express');
const router = express.Router();
const Contact = require('../models/contactModel');
const {check, validationResult} = require('express-validator');
router.post('/contact/send',function(req,res){
    const errors = validationResult(req);
    if(errors.isEmpty()){
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
    const data = new Contact({
        firstname:firstname,
        lastname:lastname,
        email:email,
        subject:subject,
        message:message
    })
    data.save()
    .then(function(result){
        res.status(201).json({message : "Sent Message!!!" })

    })
    .catch(function(error){
        res.status(500).json({message : error })
    })
}
else
{
res.status(400).json(errors.array())
}
})
module.exports = router;