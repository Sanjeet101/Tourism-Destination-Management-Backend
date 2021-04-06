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

//for delete

router.delete('/place/delete/:id', function (req, res) {
  // extra -- check if id exists
  const pid = req.params.id;
  Product.deleteOne({ _id: id })
    .then(function (result) {
      res.status().json({ message: 'Product deleted' });
    })
    .catch(function (error) {
      res.status(500).json({ message: err });
    });
});

//for update

router.put('/place/update', function (req, res) {
  const placename = req.body.placename;
  const placeprice = req.body.placeprice;
  const placedesc = req.body.placedesc;

  const pid = req.body.id;
  Place.updateOne(
    { _id: pid },
    {
      placename: placename,
      placeprice: placeprice,
      placedesc: placedesc,
     
    }
  )
    .then(function (result) {
      console.log(result);
      res.status(200).json({ message: 'Place Updated Successfully!!' });
    })
    .catch(function (e) {
      console.log(e);
      res.status(500).json({ message: e });
    });
});



module.exports = router;
