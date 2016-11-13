var userlib = require('../../library/userlib');
var loginuser = function loginuser(req, res){
    var parameters = {};
    var error = {};
    error.status = false;
    var parameters = {};
    if(req.query.username == undefined || parameters.username ==''){
        error.status = true;
        error.msg = 'username is requires';
    }else {
        parameters.username = req.query.username;
    }
    if(req.query.password == undefined || parameters.password ==''){
        error.status = true;
        error.msg = 'password is requires';        
    }else{
        parameters.password = req.query.password;
    }
    if(error.status == false){
        userlib.getUserDetail(parameters, function(result){
            sendResponse(result, res);
        });    
    } else{
        sendResponse(error, res);
    }
}
function sendResponse($data, res){
    res.send($data);
}
module.exports.loginuser = loginuser;
