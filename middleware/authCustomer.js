const authCustomer = function(req,res, next){
    console.log("this is auth Customer")
    next();
}
module.exports = authCustomer;