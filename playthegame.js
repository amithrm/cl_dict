var PRequest = require('./getprequest.js');
var Get_Examples = require('./getexamples.js')
var Get_Definitions = require('./getdefinitions.js')
var Get_RelatedWords = require('./getrelatedwords.js')

var playthegame = function(){
    var host = "http://api.wordnik.com:80/v4/";
    var d = new Date();
    var yyyy = d.getFullYear().toString();
    var mm = (d.getMonth()+1).toString();
    var dd = d.getDate().toString();
    var datestring = yyyy+'-'+(mm[1]?mm:"0"+mm[0])+'-'+(dd[1]?dd:"0"+dd[0]);

    var path = 'words.json/wordOfTheDay';
    var api_key = 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    var querystring = '?date='+datestring+'&api_key='+api_key;
    var url = host+path+querystring;

    PRequest(url)
    .then(function(response) { //callback invoked on deferred.resolve
        var word = response.word;
        console.log("word of the day :"+word);
        Get_Examples(word);
        Get_Definitions(word);
        Get_RelatedWords('synant',word);
    }).catch (function(error) { //callback invoked on deferred.reject
        console.log('error found');
        console.log(error.message);
    })

}
module.exports = getwordoftheday;
