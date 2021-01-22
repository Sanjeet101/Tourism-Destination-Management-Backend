const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const trip_db = require('./database/trip_db');
const customersRoute = require('./routes/customersRoute');
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(customersRoute);
app.listen(90);

