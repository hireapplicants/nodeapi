var mysqlDb = require('../db/mysql');
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