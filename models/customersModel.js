const mongoose = require('mongoose');
const Customers = mongoose.model('Customers', {
    fullname: {
        type: String
    },
    email: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    phone: {
        type: Number
    },
    date_of_birth:{
        type: String
    },
    address: {
        type: String
    }
})
module.exports = Customers;