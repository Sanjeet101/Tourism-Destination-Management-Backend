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
    pimage :{
        type: String
    }
})
module.exports = Place;