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
var d = new date();
        var datestring = d.getfullyear()+'-'+d.getmonth()+'-'+d.getdate();
        path = 'word.json/'+word+'/definitions'
        host += path;
        var querystring ={
            date : datestring,
            api_key : "a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"
        }
        var options = {
            host: host,
            qs : querystring,
            method: "get",
            headers : {
                'content-type' : 'application/json'
            }

        };
