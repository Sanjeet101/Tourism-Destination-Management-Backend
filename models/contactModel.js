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
        unique : true
    },
    subject: {
        type: String,
        
    },
    message: {
        type: String,
      
    }
    
})
module.exports = Contact;