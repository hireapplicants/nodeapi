var companyModel = require('./../model/companymodel');
module.exports.getCountryList = function(data, cb){
    companyModel.getCountryList(data, function(countryList){
        cb(countryList);
    });
};
module.exports.getStateList = function(data, cb){
    companyModel.getStateList(data, function(stateList){
        cb(stateList);
    });
};