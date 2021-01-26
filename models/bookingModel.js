const mongoose = require('mongoose');
const Booking = mongoose.model('Booking', {
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
    destination: {
        type: String,
        required : true
    },
    no_of_people: {
        type: Number,
        required : true
    },
    departure:{
        type: Date
    },
    arrival: {
        type: Date
    },
    phone:{
        type : Number,
        require : true
    }
})
module.exports = Booking;