const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const trip_db = require('./database/trip_db');
const customersRoute = require('./routes/customersRoute');
const bookingRoute = require('./routes/bookingRoute');
const contactRoute = require('./routes/contactRoute');
// const publicDir = path.join(_dirname,'public');
// app.use(express.static(publicDir))
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(customersRoute);
app.use(bookingRoute);
app.use(contactRoute);
app.listen(90);

