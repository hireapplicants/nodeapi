var mysqlDb = require('../db/mysql');
var userEntity = require('./user');
module.exports.getCountryList = function(parameters, cb) {
    var query = '';
    var identifiers = 0;
    var queryData = [];
    query += 'select * from country_master';
    if(parameters.country_id !=undefined && parameters.country_id>0){
        query += ' Where id=?';
        queryData[identifiers] = parameters.country_id;
    }
    mysqlDb.dbQuery(query, queryData, function(result){
        var response = {};
        response.status = false;
        if(result.length){
            response.status = true;
            response.data = result;
            cb(response);
        }else{
            cb(response);
        }
    });
}

module.exports.getStateList = function(parameters, cb) {
    var query = '';
    var identifiers = 0;
    var queryData = [];
    var columns = ['state_master.id', 'state_master.state_name', 'state_master.state_short_name', 'country_master.id', 'country_master.country_name'];
    query += 'select ?? from state_master'
    query += ' LEFT JOIN country_master on state_master.country_id=country_master.id';
    queryData[identifiers++] = columns;
    if(parameters.state_id !=undefined && parameters.state_id>0){
        query +=' WHERE state_master.id=?';
        queryData[identifiers++] = parameters.state_id;
    }else if(parameters.country_id !=undefined && parameters.country_id>0){
        query +=' WHERE state_master.country_id=?';
        queryData[identifiers++] = parameters.country_id;
    }
    mysqlDb.dbQuery(query, queryData, function(result){
        var response = {};
        response.status = false;
        if(result.length){
            response.status = true;
            response.data = result;
            cb(response);
        }else{
            cb(response);
        }
    });
}
module.exports.priceSave = function(parameters, cb) {
    var query = '';
    var queryData = parameters;
    console.log(queryData);
    query += 'INSERT INTO service_price_master set ?';
    mysqlDb.dbQuery(query, queryData, function(result){
        var response = {};
        console.log(result);
        response.status = false;
        if(result.insertId){
            response.status = true;
            response.data = result;
            cb(response);
        }else{
            cb(response);
        }
    });
}
module.exports.addCompany = function(parameters, cb) {
    var query = '';
    var queryData = parameters.company;
    console.log(queryData);
    query += 'INSERT INTO company_master set ?';
    mysqlDb.dbQuery(query, queryData, function(result){
        var response = {};
        response.status = false;
        if(result.insertId != undefined && result.insertId>0){
            parameters.userDetail.company_id = result.insertId;
            parameters.roleDetail = {};
            parameters.roleDetail.role_id = 2;
            userEntity.addCompanyUsers(parameters.userDetail, parameters.roleDetail, cb);
        }else{
            cb(response);
        }
    });
}

module.exports.getCompanyList = function(parameters, cb) {
    var query = '';
    var identifiers = 0;
    var queryData = [];
    var columns = ['company_master.id', 'company_master.company_name', 'company_master.company_url', 'company_master.address', 'company_master.zip_code','company_master.type', 'company_master.contact_via', 'company_master.time_to_contact', 'company_master.status', 'user_master.email', 'user_master.phone_number', 'user_master.alt_phone_number', 'country_master.country_name', 'state_master.state_name'];
    query += 'select ?? from company_master ';
    queryData[identifiers++] = columns;
    query += 'LEFT JOIN user_master ON company_master.id=user_master.company_id ';
    query += 'LEFT JOIN country_master ON company_master.country_id=country_master.id ';
    query += 'LEFT JOIN state_master ON company_master.state_id=state_master.id ';
    if(parameters.company_id != undefined){
        query += ' Where company_master.id=?';
        queryData[identifiers++] = parameters.company_id;
    }    
    if(parameters.status != undefined){
        if(parameters.company_id != undefined){
            query += ' AND company_master.status=?';
            queryData[identifiers++] = parameters.status;
        }else{
            query += ' WHERE company_master.status=?';
            queryData[identifiers++] = parameters.status;            
        }
    }    
       mysqlDb.dbQuery(query, queryData, function(result){
        var response = {};
        response.status = false;
        if(result.length){
            response.status = true;
            response.data = result;
            cb(response);
        }else{
            cb(response);
        }
    }); 
};

module.exports.deleteEmailTemplate = function(parameters , cb){
    var query = '';
    var identifiers = 0;
    var queryData = [];
    query += 'delete from email_template where id =?';
    queryData[identifiers] = parameters.id;
    mysqlDb.dbQuery(query, queryData, function(result){
            var response = {};
            response.status = true;
            cb(response);
    }); 
};
module.exports.editEmailTemplate = function(parameters , cb){
    var query = '';
    var identifiers = 0;
    var queryData = [];
    query += 'select * from email_template where id =?';
    queryData[identifiers] = parameters.id;
    mysqlDb.dbQuery(query, queryData, function(result){
            var response = {};
            response.status = true;
            if(result.length){
            response.status = true;
            response.data = result;
            cb(response);
            }else{
                cb(response);
            }
    }); 
};
module.exports.saveEmailTemplate = function(parameters, cb) {
    var query = '';
    var queryData = parameters.emailDetails;
    query += 'INSERT INTO email_template set ?';
    mysqlDb.dbQuery(query, queryData, function(result){
        var response = {};
        response.status = false;
        if(result.insertId != undefined && result.insertId>0){
            response.status = true;
            response.msg = 'Email template added successfully';
            cb(response);
        }else{
            cb(response);
        }
        });
}
module.exports.getTemplateList = function(parameters , cb){
    var query = '';
    var identifiers = 0;
    var queryData = [];
    query += 'select * from email_template';
    if(parameters.type !=undefined && parameters.type>0){
        query += ' Where type=?';
        queryData[identifiers] = parameters.type;
    }
    mysqlDb.dbQuery(query, queryData, function(result){
        var response = {};
        response.status = false;
        if(result.length){
            response.status = true;
            response.data = result;
            cb(response);
        }else{
            cb(response);
        }
    });
}