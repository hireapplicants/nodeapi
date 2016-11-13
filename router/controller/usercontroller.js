var userlib = require('../../library/userlib');
var loginuser = function loginuser(req, res){
    var parameters = {};
    var error = {};
    error.status = false;
    parameters = req.query;
    console.log(parameters.username);
    if(parameters.username == undefined || parameters.username ==''){
        error.status = true;
        error.msg = 'username is requires';
    }else if(parameters.password == undefined || parameters.password ==''){
        error.status = true;
        error.msg = 'password is requires';        
    }
    if(error.status == false){
        userlib.getUserDetail(req.query, function(result){
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
