var userModel = require('./../model/usermodel');
module.exports.getUserDetail = function(data, cb){
    userModel.getUserDetail(data, function(userDetails){
        cb(userDetails);
    });
};