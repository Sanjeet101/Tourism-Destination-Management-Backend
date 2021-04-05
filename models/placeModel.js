const mongoose = require('mongoose');
const Place = mongoose.model('Place', {
    placename: {
        type: String
        
    },
    placedesc: {
        type: String
        
    },
    placeprice: {
        type: String
    },
    image :{
        type: String
    }
})
module.exports = Place;