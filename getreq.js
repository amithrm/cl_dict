var http = require('http');
var request = require('request');

var Request = function performRequest(options, success) {
  var req = request(this, function(res) {
    res.setEncoding('utf-8');

    var responseString = '';
    res.on('data', function(data) {
        responseString += data;
    });
    res.on('end', function() {
        console.log(responseString);
        var responseObject = JSON.parse(responseString);
        success(responseObject);
        });
    });

  req.on('error', function(e) {
    console.log('problem with request: '+ e.message);
  });

  req.end();
}
function success(obj) {
    return obj;
}
module.exports = Request;
