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
module.exports.priceSave = function priceSave(data, cb){
    companyEntity.priceSave(data, function(result){
        cb(result);
    });
};
module.exports.addCompany = function addCompany(data, cb){
    companyEntity.addCompany(data, function(result){
        cb(result);
    });
};