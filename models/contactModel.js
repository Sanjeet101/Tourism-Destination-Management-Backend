const mongoose = require('mongoose');
const Contact = mongoose.model('Contact', {
    firstname: {
        type: String
    },
    lastname: {
        type: String,
       
    },
    email: {
        type: String,
        required : true,
        unique : true
    },
    subject: {
        type: String,
        required : true
    },
    message: {
        type: Number,
        required : true
    }
    
})
module.exports = Contact;