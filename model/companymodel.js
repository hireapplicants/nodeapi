var companyEntity = require('./../entity/company');
module.exports.getCountryList = function getCountryList(data, cb){
    companyEntity.getCountryList(data, function(result){
        cb(result);
    });
};
module.exports.getStateList = function getStateList(data, cb){
    companyEntity.getStateList(data, function(result){
        cb(result);
    });
};