const mongoose = require('mongoose');
const Customers = mongoose.model('Customers', {
    name: {
        type: String
    },
    username: {
        type: String,
        
        unique : true
    },
    email: {
        type: String,
        
        unique : true
    },
    password: {
        type: String,
        
    },
    accountType:{
        type : String,
        enum : ['Admin','Customer']
    }
})
module.exports = Customers;