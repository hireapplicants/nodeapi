var userEntity = require('./../entity/user');
var getUserDetail = function getUserDetail(data, cb){
    userEntity.getUserDetail(data, function(result){
        cb(result);
    });
}
module.exports.saveNewUser = function(data, cb){
    userEntity.saveNewUser(data, function(result){
        cb(result);
    });
}
module.exports.addCompanyUsers = function(data, cb){
    userEntity.addCompanyUsers(data, function(result){
        cb(result);
    });
}
module.exports.updateUserDetail = function(data, cb){
    userEntity.updateUserDetail(data, function(result){
        cb(result);
    });    
}
module.exports.getUserDetail = getUserDetail;