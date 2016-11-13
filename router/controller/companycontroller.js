var companylib = require('../../library/companylib');
module.exports.getcountrylist = function getcountrylist(req, res){
    var parameters = {};
    var error = {};
    error.status = false;
    var parameters = {};
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
function sendResponse($data, res){
    res.send($data);
}
