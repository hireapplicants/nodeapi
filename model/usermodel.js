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
module.exports.getUserDetail = getUserDetail;