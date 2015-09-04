var Request = require('./examples.js')

var host = "http://api.wordnik.com:80/v4/";
var op = process.argv[2];
var word = process.argv[3];
console.log(op,word);
if(op=='ex'){
    path = 'word.json/'+word+'/examples'
}
host +=path;
console.log(host);
var limit = 5;

var querystring = {
    includeDuplicates : "false",
    useCanonical : "false",
    skip : 0,
    limit : limit,
    api_key : "a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"
};
var options = {
    url : host,
    qs : querystring,
    method : 'GET',
    headers : {
        'Content-Type' : 'application/json'
    }
};
if (op=='ex'){
    var info = Request(options,function(response){
        console.log('word : '+response.examples[0].word);
        for (i=0;i<limit;i++){
            console.log('example '+(i+1)+'\n'+response.examples[i].text);
        }
    });
}
