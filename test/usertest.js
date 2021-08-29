// const Place = require('../models/placeModel');
// const mongoose = require('mongoose');
// const url= 'mongodb://localhost:90/testDB';
// beforeAll(async() =>{
//     awaitmongoose.connect(url, {
//         useNewUrlParser:true,
//         useCreateIndex:true
//     });
// });
// afterAll(async() =>{
//     awaitmongoose.connection.close();
// });
// describe('Place Schema test anything', () => {
//     it('Add place testing an thing', () => {
//         const place = {
//             'placename':'Phidim',
//             'placeprice':'From Rs. 10,000 - Rs. 15,000'
//         };
//         return Place.create(place)
//         .then((pro_ret) =>{
//             expect(pro_ret.placename).toEqual('Phidim');
//         });
//     });
//     it('to test the delete place is working or not', async() =>{
//         const status= awaitPlace.deleteMany(); 
//         expect(status.ok).toBe(1);
//     });
//     it('to test the update', async() =>{
//         return Place.findOneAndUpdate({_id :Object('607c5162b28e570d84490c09')}, 
//         {$set :{placename:'Pachthar'}})
//         .then((pp)=>{
//             expect(pp.placename).toEqual('Pachthar')
//         })
//     });
// })
