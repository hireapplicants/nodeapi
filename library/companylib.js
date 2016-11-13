var companyModel = require('./../model/companymodel');
module.exports.getCountryList = function(data, cb){
    companyModel.getCountryList(data, function(companyList){
        cb(companyList);
    });
};