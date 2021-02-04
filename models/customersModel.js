const mongoose = require('mongoose');
const Customers = mongoose.model('Customers', {
    fullname: {
        type: String
    },
    email: {
        type: String,
        required : true,
        unique : true
    },
    username: {
        type: String,
        required : true,
        unique : true
    },
    password: {
        type: String,
        required : true
    },
    phone: {
        type: Number,
        required : true
    },
    address: {
        type: String
    },
    accountType:{
        type : String,
        required : true,
        enum : ['Admin','Customer']
    }
})
module.exports = Customers;