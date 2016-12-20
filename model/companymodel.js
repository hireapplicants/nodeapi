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
module.exports.getCompanyList = function getCompanyList(data, cb){
    companyEntity.getCompanyList(data, function(result){
      cb(result);
    });
};

module.exports.editEmailTemplate = function editEmailTemplate(data , cb){
    companyEntity.editEmailTemplate(data, function(result){
        cb(result);
    });
};
module.exports.saveEmailTemplate = function saveEmailTemplate(data, cb){
    companyEntity.saveEmailTemplate(data, function(result){
        cb(result);
    });
};

module.exports.getTemplateList = function getTemplateList(data , cb){
    companyEntity.getTemplateList(data, function(result){
        cb(result);
    });
};
module.exports.getEmailTeamplateName = function getEmailTeamplateName(data , cb){
    companyEntity.getEmailTeamplateName(data, function(result){
        cb(result);
    });
};

module.exports.deleteEmailTemplate = function deleteEmailTemplate(data , cb){
    companyEntity.deleteEmailTemplate(data, function(result){
        cb(result);
    });
};    

module.exports.editEmailTemplate = function editEmailTemplate(data , cb){
    companyEntity.editEmailTemplate(data, function(result){
        cb(result);
    });
};
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
module.exports.saveEmailTemplate = function saveEmailTemplate(data, cb){
    companyEntity.saveEmailTemplate(data, function(result){
        cb(result);
    });
};

module.exports.getTemplateList = function getTemplateList(data , cb){
    companyEntity.getTemplateList(data, function(result){
        cb(result);
    });
};

module.exports.deleteEmailTemplate = function deleteEmailTemplate(data , cb){
    companyEntity.deleteEmailTemplate(data, function(result){
        cb(result);
    });
};