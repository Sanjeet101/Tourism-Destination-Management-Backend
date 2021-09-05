// const jwt = require('jsonwebtoken');
// const Customers = require('../models/customersModel');
// //main guard
// module.exports.verifyCustomer = function(req,res, next){
//     try{
//         const token = req.headers.authorization.split(" ")[1];
//         const data = jwt.verify(token, 'secretkey');
//         Customers.findOne({_id : data.CustomerId})
//         .then(function(result){
//             //success
//             req.customer = result;
//             next();
//         })
//         .catch(function(result){
//             //invalid
//             res.status('403').json({errror : " Customer Auth Failed"})
//         })
       
//     }
//     catch(error){
//         res.status('403').json({errror : error})
//     }
// }
// //second guard
// module.exports.verifyAdmin = function(req,res,next){
//     if(!req.customer){
//         return res.status(401).json({message : "not allowed!! "})
//     }
//     else if(req.customer.accountType!=='Admin'){
//         return res.status(401).json({message : "permission denied!!"})
//     }
//     next();

// }
