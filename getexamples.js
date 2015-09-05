var Request = require('./getrequest.js')

var host = "http://api.wordnik.com:80/v4/";
var limit = 5;
var path = '';

var get_examples = function(word){
    path = 'word.json/'+word+'/examples'
    var querystring = {
        includeDuplicates : "false",
        useCanonical : "false",
        skip : 0,
        limit : limit,
        api_key : "a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"
    };
    host +=path;

    var options = {
        url : host,
        qs : querystring,
        method : 'GET',
        headers : {
            'Content-Type' : 'application/json'
        }
    };

    Request(options,function(response){
        var len = response.examples.length;
        var limit = limit<len?limit:len;
        for (i=0;i<limit;i++){
            console.log('example :'+(i+1)+'\n'+response.examples[i].text);
        }
    });
}

module.exports = get_examples;
