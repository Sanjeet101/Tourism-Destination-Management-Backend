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
        type: Date,
        required : true
    },
    arrival: {
        type: Date
    },
    phone:{
        type : Number,
        required : true
    }
})
module.exports = Booking;