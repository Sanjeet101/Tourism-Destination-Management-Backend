const mongoose = require('mongoose');
const Booking = mongoose.model('Booking', {
    fullname: {
        type: String,
        
    },
    email: {
        type: String,
        
        unique : true
    },
    username: {
        type: String
    },
    destination: {
        type: String
      
    },
    no_of_people: {
        type: Number
    },
    departure:{
        type: Number
        
    },
    arrival: {
        type: Number
    },
    phone:{
        type : Number
       
    }
})
module.exports = Booking;