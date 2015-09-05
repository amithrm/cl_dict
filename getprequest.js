var http = require('http');
var Q = require('q');

var PRequest = function promisedRequest(reqUrl) {
    var deferred  = Q.defer();
    var req = http.get(reqUrl, function(response) {
        response.setEncoding('utf8');
        var responseData = '';
        response.on('data', function(data) {
            responseData += data;
        });
        response.on('end', function() {
            deferred.resolve(JSON.parse(responseData));
        });
    });

    req.on('error', function(err) {
        deferred.reject(err);
    });
    return deferred.promise;
    console.log(deferred.promise);
};
module.exports = PRequest;
