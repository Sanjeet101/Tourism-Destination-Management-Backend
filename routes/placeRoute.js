const express = require('express');
const router = express.Router();
const Place = require('../models/placeModel');
const { check, validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs'); //for password encryption
const authCustomer = require('../middleware/authCustomer');
const upload = require('../middleware/imageUpload');
const jwt = require('jsonwebtoken');

router.post('/place/add', upload.single('pimage'), function (req, res) {
  console.log(req.file);
  if (req.file == undefined) {
    return res.status(500).json({ message: 'Invalid file format' });
  }
  const placename = req.body.placename;
  const pdesc = req.body.pdesc;
  const pprice = req.body.pprice;


  const data = new Place({
    placename: placename,
    pdesc: pdesc,
    placeprice: placeprice,
    pimage: req.file.filename,
  });

  data
    .save()
    .then(function (result) {
      // success
      res.status(200).json({ message: 'Place added successfully' });
    })
    .catch(function (error) {
      res.status(500).json({ message: error });
    });
});





module.exports = router;
