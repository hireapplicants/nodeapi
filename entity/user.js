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
module.exports.getUserDetail = getUserDetail;