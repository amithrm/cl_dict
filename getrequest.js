var request = require('request');

var Request = function performRequest(options,callback){
    request(options, function (error, response, body) {
        if (error){
            console.log(error.message,"No results found");
            return;
        }
        else if (response.statusCode != 200) {
            console.log(error,response.statusCode);
            return;
        }
        else {
            var info = JSON.parse(body);
            return callback(info);
        }
    })
}
module.exports = Request;
