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