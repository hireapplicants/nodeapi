var mysqlDb = require('../db/mysql');
/*var getUserDetail = function(data, cb){
    var dbo = global.db.getDbo();
    var usercollection = dbo.collection('users');
    usercollection.find(data).toArray(function(err, userDetails){
      cb(userDetails);  
    });
    //cb(userDetail);
}
module.exports.saveNewUser = function(data, cb){
    var dbo = global.db.getDbo();
    var usercollection = dbo.collection('users');
    usercollection.insert(data, function(err, data){
        var result = {};
        result.status = true;
        if(err) {
            result.status = false;
            cb(result);
        }else{
            result.data = data;
            cb(result);
        }
    });
    
}
module.exports.getUserDetail = getUserDetail;*/
var getUserDetail = function(data, cb) {
    var query = '';
    var identifiers = 0;
    var queryData = [];
    var columns = [];
    query += 'select * from user_master where username=? AND password=?';
    queryData[identifiers++] = data.username;
    queryData[identifiers++] = data.password;
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
module.exports.addCompanyUsers = function(parameters, roleDetail, cb){
    var query = '';
    var queryData = parameters;
    console.log(queryData);
    query += 'INSERT INTO user_master set ?';
    mysqlDb.dbQuery(query, queryData, function(result){
        var response = {};
        response.status = false;
        if(result.insertId != undefined && result.insertId>0){
            roleDetail.user_id = result.insertId;
            addRole(roleDetail, cb);
        }else{
            cb(response);
        }   
    });    
}
function addRole(parameters, cb){
    var query = '';
    var queryData = parameters;
    query += 'INSERT INTO user_role_mapping set ?';
    mysqlDb.dbQuery(query, queryData, function(result){
        var response = {};
        response.status = false;
        if(result.insertId != undefined && result.insertId>0){
            response.status = true;
            response.data = result;
            cb(response);
        }else{
            cb(response);
        }   
    });    
}
module.exports.updateUserDetail = function(parameters , cb){
    var query = '';
    var queryData = [];
    var identifiers = 0;
    query = 'UPDATE user_master set ? ';
    queryData[identifiers++] = parameters.fields_to_update;
    query += ' Where ?';
    queryData[identifiers++] = parameters.where;
    mysqlDb.dbQuery(query, queryData, function(result){
        console.log(result);
        var response = {};
        response.status = false;
        if(result.affectedRows != undefined && result.affectedRows>0){
            response.status = true;
            response.msg = 'data updated successfully';
            cb(response);
        }else{
            cb(response);
        }
    });    
}
module.exports.userRoleList = function(userIds, cb){
    var query = '';
    var identifiers = 0;
    var queryData = [];
    var columns = ['urm.user_id', 'urm.role_id'];
    query += 'select ?? from user_role_mapping urm LEFT JOIN role_master rm ON urm.role_id=rm.id where urm.user_id IN(?)';     
    queryData[identifiers++] = columns;
    queryData[identifiers++] = userIds;
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
module.exports.getUserDetail = getUserDetail;