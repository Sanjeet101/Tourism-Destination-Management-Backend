const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const trip_db = require('./database/trip_db');
const customersRoute = require('./routes/customersRoute');
const bookingRoute = require('./routes/bookingRoute');
const contactRoute = require('./routes/contactRoute');
const placeRoute = require('./routes/placeRoute');
const path = require('path');
// const publicDir = path.join(_dirname,'public');
// app.use(express.static(publicDir))
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'image')));
app.use(customersRoute);
app.use(bookingRoute);
app.use(contactRoute);
app.use(placeRoute);
app.listen(90);

