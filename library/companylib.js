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
module.exports.priceSave = function(data, cb){
    companyModel.priceSave(data, function(stateList){
        cb(stateList);
    });
};
module.exports.addCompany = function(data, cb){
    companyModel.addCompany(data, function(stateList){
        cb(stateList);
    });
};
module.exports.getCompanyList = function(data, cb){
    companyModel.getCompanyList(data, function(companyList){
        cb(companyList);
    });
};

module.exports.saveEmailTemplate = function(data, cb){
    companyModel.saveEmailTemplate(data, function(saveemail){
        cb(saveemail);
    });
};

module.exports.getTemplateList = function(data , cb){
    companyModel.getTemplateList(data , function(getTemplate){
        cb(getTemplate);
    });
}
module.exports.deleteEmailTemplate = function(data , cb){
    companyModel.deleteEmailTemplate(data , function(deleteTeplate){
        cb(deleteTeplate);
    });
};

module.exports.editEmailTemplate = function(data , cb){
    companyModel.editEmailTemplate(data , function(editEmailTemplate){
        cb(editEmailTemplate);
    });
};
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
module.exports.priceSave = function(data, cb){
    companyModel.priceSave(data, function(stateList){
        cb(stateList);
    });
};
module.exports.addCompany = function(data, cb){
    companyModel.addCompany(data, function(stateList){
        cb(stateList);
    });
};
module.exports.saveEmailTemplate = function(data, cb){
    companyModel.saveEmailTemplate(data, function(saveemail){
        cb(saveemail);
    });
};

module.exports.getTemplateList = function(data , cb){
    companyModel.getTemplateList(data , function(getTemplate){
        cb(getTemplate);
    });
}
module.exports.deleteEmailTemplate = function(data , cb){
    companyModel.deleteEmailTemplate(data , function(deleteTeplate){
        cb(deleteTeplate);
    });
};

module.exports.editEmailTemplate = function(data , cb){
    companyModel.editEmailTemplate(data , function(editEmailTemplate){
        cb(editEmailTemplate);
    });
};
