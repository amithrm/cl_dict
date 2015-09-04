var request = require('request');

var limit = 5;

var Request = function performRequest(options,callback){
    request(options, function (error, response, body) {
        if (error){
            console.log(error);
        }
        else if (response.statusCode != 200) {
            console.log(error,response.statusCode);
        }
        else {
            var info = JSON.parse(body);
            return callback(info);
        }
    })
}
module.exports = Request;
