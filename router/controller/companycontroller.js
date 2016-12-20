var companylib = require('../../library/companylib');
var cryptoJs = require('crypto-js');
module.exports.getcountrylist = function getcountrylist(req, res){
    var parameters = {};
    var error = {};
    error.status = false;
    if(req.query.country_id!=undefined && req.query.country_id!=''){
        parameters.country_id = req.query.country_id;
    }
    if(error.status == false){
        companylib.getCountryList(parameters, function(result){
            sendResponse(result, res);
        });    
    } else{
        sendResponse(error, res);
    }
}
module.exports.getstatelist = function getstatelist(req, res){
    var parameters = {};
    var error = {};
    error.status = false;
    if(req.query.country_id!=undefined && req.query.country_id!=''){
        parameters.country_id = req.query.country_id;
    }else if(req.query.state_id!=undefined && req.query.state_id!=''){
        parameters.state_id = req.query.state_id;
    }
    if(error.status == false){
        companylib.getStateList(parameters, function(result){
            sendResponse(result, res);
        });    
    } else{
        error.status = false;
        sendResponse(error, res);
    }
}
function sendResponse($data, res){
    res.send($data);
}
module.exports.addcompany = function addcompany(req, res){
    var parameters = {};
    parameters.company = {};
    parameters.userDetail = {};
    var error = {};
    error.status = false;
    req.query.parameters = JSON.parse(req.query.parameters);
    if(req.query.parameters.company_name!=undefined && req.query.parameters.company_name!=''){
        parameters.company.company_name = req.query.parameters.company_name;
        parameters.userDetail.first_name = req.query.parameters.company_name;
    }else{
        error.status = true;
        error.msg = 'company name not supplied';
    }
    if(req.query.parameters.company_url!=undefined && req.query.parameters.company_url!=''){
        parameters.company.company_url = req.query.parameters.company_url;
    }else{
        error.status = true;
        error.msg = 'company url is not supplied';            
    }
    if(req.query.parameters.country_id!=undefined && req.query.parameters.country_id!=''){
        parameters.company.country_id = req.query.parameters.country_id;
    }else{
        error.status = true;
        error.msg = 'country name is not supplied';            
    }
    if(req.query.parameters.state_id!=undefined && req.query.parameters.state_id!=''){
        parameters.company.state_id = req.query.parameters.state_id;
    }else{
        error.status = true;
        error.msg = 'state name is not supplied';
    }
    if(req.query.parameters.address!=undefined && req.query.parameters.address!=''){
        parameters.company.address = req.query.parameters.address;
    }else{
        error.status = true;
        error.msg = 'address can not be empty';            
    }
    if(req.query.parameters.zip_code!=undefined && req.query.parameters.zip_code!=''){
        parameters.company.zip_code = req.query.parameters.zip_code;
    }else{
        error.status = true;
        error.msg = 'zip code can not be empty';            
    }
    if(req.query.parameters.type!=undefined && req.query.parameters.type!=''){
        parameters.company.type = req.query.parameters.type;
    }
    if(req.query.parameters.contact_via!=undefined && req.query.parameters.contact_via!=''){
        parameters.company.contact_via = req.query.parameters.contact_via;
    }     
    if(req.query.parameters.email!=undefined && req.query.parameters.email!=''){
        parameters.userDetail.email = req.query.parameters.email;
        parameters.userDetail.username = req.query.parameters.email;
    }else{
        error.status = true;
        error.msg = 'email can not be empty';            
    }
    if(req.query.parameters.phone_number!=undefined && req.query.parameters.phone_number!=''){
        parameters.userDetail.phone_number = req.query.parameters.phone_number;
    }else{
        error.status = true;
        error.msg = 'phone number can not be empty';            
    }
    if(req.query.parameters.phone_number!=undefined && req.query.parameters.phone_number!=''){
        parameters.userDetail.alt_phone_number = req.query.parameters.alt_phone_number;
    }
    if(error.status == false){
        var activation_code = cryptoJs.SHA256(parameters, global.secret_key);
        parameters.company.activation_code = activation_code.toString(cryptoJs.enc.Base64);
        companylib.addCompany(parameters, function(result){
            sendResponse(result, res);
        });   
    }else{
        error.status = false;
        sendResponse(error, res);
    }    
}
module.exports.getcompanylist = function getcompanylist(req, res){
    var parameters = {};
    var error = {};
    error.status = false;
    if(req.query.company_id!=undefined && req.query.company_id>0){
        parameters.company_id = req.query.company_id;
    }
    if(req.query.email!=undefined && req.query.email!=''){
        parameters.email = req.query.email;
    }    
    if(req.query.status!=undefined && req.query.status!=''){
        parameters.status = req.query.status;
    }    
    if(error.status == false){
        companylib.getCompanyList(parameters, function(result){
            sendResponse(result,res);
        });
    }
    else{
        sendResponse(result,res);
    }
} 

module.exports.saveemailtemplate = function saveemailtemplate(req, res){
    var parameters = {};
    parameters.emailDetails = {};
    var error = {};
    error.status = false;
    req.query.parameters = req.query;
    if(req.query.parameters.type!=undefined && req.query.parameters.type!=''){
        parameters.emailDetails.type = req.query.parameters.type;
    }else{
        error.status = true;
        error.msg = 'Email type not supplied';
    }
    if(req.query.parameters.company_id!=undefined && req.query.parameters.company_id!=''){
        parameters.emailDetails.company_id = req.query.parameters.company_id;
    }else{
        error.status = true;
        error.msg = 'Company Id not supplied';
    }
    if(req.query.parameters.role_id!=undefined && req.query.parameters.role_id!=''){
        parameters.emailDetails.role_id = req.query.parameters.role_id;
    }else{
        error.status = true;
        error.msg = 'Role Id not supplied';
    }
    
    if(req.query.parameters.nick_name!=undefined && req.query.parameters.nick_name!=''){
        parameters.emailDetails.nick_name = req.query.parameters.nick_name;
    }else{
        error.status = true;
        error.msg = 'nick name is not supplied';            
    }
    if(req.query.parameters.subject!=undefined && req.query.parameters.subject!=''){
        parameters.emailDetails.subject = req.query.parameters.subject;
    }else{
        error.status = true;
        error.msg = 'subject is not supplied';            
    }
    parameters.emailDetails.cc_mail = req.query.parameters.cc_mail;
    parameters.emailDetails.bcc_mail = req.query.parameters.bcc_mail;
    parameters.emailDetails.body_msg = req.query.parameters.body_msg;
    if(error.status == false){
        companylib.saveEmailTemplate(parameters, function(result){
            sendResponse(result, res);
        });   
    }else{
        error.status = false;
        sendResponse(error, res);
    }
}

module.exports.gettemplatelist = function gettemplatelist(req, res){
    var parameters = {};
    var error = {};
    error.status = false;
    if(req.query.country_id!=undefined && req.query.country_id!=''){
        parameters.country_id = req.query.country_id;
    }
    if(error.status == false){
        companylib.getTemplateList(parameters, function(result){
            sendResponse(result, res);
        });    
    } else{
        sendResponse(error, res);
    }
}
module.exports.getEmailTeamplateName = function getEmailTeamplateName(req, res){
    var parameters = {};
    var error = {};
    error.status = false;
    if(req.query.role_id!=undefined && req.query.role_id!=''){
        parameters.role_id = req.query.role_id;
    }
    if(error.status == false){
        companylib.getEmailTeamplateName(parameters, function(result){
            sendResponse(result, res);
        });    
    } else{
        sendResponse(error, res);
    }
}

module.exports.deleteEmailTemplate = function deleteEmailTemplate(req, res){
    var parameters = {};
    var error = {};
    error.status = false;
    if(req.query.id!=undefined && req.query.id!=''){
        parameters.id = req.query.id;
    }
    if(error.status == false){
        companylib.deleteEmailTemplate(parameters, function(result){
            sendResponse(result, res);
        });    
    } else{
        sendResponse(error, res);
    }
}
module.exports.editEmailTemplate = function editEmailTemplate(req, res){
    var parameters = {};
    var error = {};
    error.status = false;
    if(req.query.id!=undefined && req.query.id!=''){
        parameters.id = req.query.id;
    }
    if(error.status == false){
        companylib.editEmailTemplate(parameters, function(result){

            sendResponse(result, res);
        });    
    } else{
        sendResponse(error, res);
    }
}

    
module.exports.getcountrylist = function getcountrylist(req, res){
    var parameters = {};
    var error = {};
    error.status = false;
    if(req.query.country_id!=undefined && req.query.country_id!=''){
        parameters.country_id = req.query.country_id;
    }
    if(error.status == false){
        companylib.getCountryList(parameters, function(result){
            sendResponse(result, res);
        });    
    } else{
        sendResponse(error, res);
    }
}
module.exports.getstatelist = function getstatelist(req, res){
    var parameters = {};
    var error = {};
    error.status = false;
    if(req.query.country_id!=undefined && req.query.country_id!=''){
        parameters.country_id = req.query.country_id;
    }else if(req.query.state_id!=undefined && req.query.state_id!=''){
        parameters.state_id = req.query.state_id;
    }
    if(error.status == false){
        companylib.getStateList(parameters, function(result){
            sendResponse(result, res);
        });    
    } else{
        error.status = false;
        sendResponse(error, res);
    }
}
function sendResponse($data, res){
    res.send($data);
}
module.exports.addcompany = function addcompany(req, res){
    var parameters = {};
    parameters.company = {};
    parameters.userDetail = {};
    var error = {};
    error.status = false;
    req.query.parameters = JSON.parse(req.query.parameters);
    if(req.query.parameters.company_name!=undefined && req.query.parameters.company_name!=''){
        parameters.company.company_name = req.query.parameters.company_name;
        parameters.userDetail.first_name = req.query.parameters.company_name;
    }else{
        error.status = true;
        error.msg = 'company name not supplied';
    }
    if(req.query.parameters.company_url!=undefined && req.query.parameters.company_url!=''){
        parameters.company.company_url = req.query.parameters.company_url;
    }else{
        error.status = true;
        error.msg = 'company url is not supplied';            
    }
    if(req.query.parameters.country_id!=undefined && req.query.parameters.country_id!=''){
        parameters.company.country_id = req.query.parameters.country_id;
    }else{
        error.status = true;
        error.msg = 'country name is not supplied';            
    }
    if(req.query.parameters.state_id!=undefined && req.query.parameters.state_id!=''){
        parameters.company.state_id = req.query.parameters.state_id;
    }else{
        error.status = true;
        error.msg = 'state name is not supplied';
    }
    if(req.query.parameters.address!=undefined && req.query.parameters.address!=''){
        parameters.company.address = req.query.parameters.address;
    }else{
        error.status = true;
        error.msg = 'address can not be empty';            
    }
    if(req.query.parameters.zip_code!=undefined && req.query.parameters.zip_code!=''){
        parameters.company.zip_code = req.query.parameters.zip_code;
    }else{
        error.status = true;
        error.msg = 'zip code can not be empty';            
    }
    if(req.query.parameters.type!=undefined && req.query.parameters.type!=''){
        parameters.company.type = req.query.parameters.type;
    }
    if(req.query.parameters.contact_via!=undefined && req.query.parameters.contact_via!=''){
        parameters.company.contact_via = req.query.parameters.contact_via;
    }     
    if(req.query.parameters.email!=undefined && req.query.parameters.email!=''){
        parameters.userDetail.email = req.query.parameters.email;
        parameters.userDetail.username = req.query.parameters.email;
    }else{
        error.status = true;
        error.msg = 'email can not be empty';            
    }
    if(req.query.parameters.phone_number!=undefined && req.query.parameters.phone_number!=''){
        parameters.userDetail.phone_number = req.query.parameters.phone_number;
    }else{
        error.status = true;
        error.msg = 'phone number can not be empty';            
    }
    if(req.query.parameters.phone_number!=undefined && req.query.parameters.phone_number!=''){
        parameters.userDetail.alt_phone_number = req.query.parameters.alt_phone_number;
    }
    if(error.status == false){
        companylib.addCompany(parameters, function(result){
            sendResponse(result, res);
        });   
    }else{
        error.status = false;
        sendResponse(error, res);
    }    
}


module.exports.gettemplatelist = function gettemplatelist(req, res){
    var parameters = {};
    var error = {};
    error.status = false;
    if(req.query.country_id!=undefined && req.query.country_id!=''){
        parameters.country_id = req.query.country_id;
    }
    if(error.status == false){
        companylib.getTemplateList(parameters, function(result){
            sendResponse(result, res);
        });    
    } else{
        sendResponse(error, res);
    }
}

module.exports.deleteEmailTemplate = function deleteEmailTemplate(req, res){
    var parameters = {};
    var error = {};
    error.status = false;
    if(req.query.id!=undefined && req.query.id!=''){
        parameters.id = req.query.id;
    }
    if(error.status == false){
        companylib.deleteEmailTemplate(parameters, function(result){
            sendResponse(result, res);
        });    
    } else{
        sendResponse(error, res);
    }
}
module.exports.editEmailTemplate = function editEmailTemplate(req, res){
    var parameters = {};
    var error = {};
    error.status = false;
    if(req.query.id!=undefined && req.query.id!=''){
        parameters.id = req.query.id;
    }
    if(error.status == false){
        companylib.editEmailTemplate(parameters, function(result){
            sendResponse(result, res);
        });    
    } else{
        sendResponse(error, res);
    }
}
