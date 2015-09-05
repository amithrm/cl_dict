var http = require('http');
var Q = require('q');

var url = 'http://api.wordnik.com:80/v4/words.json/wordOfTheDay?date=2015-08-04&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

var PRequest = function promisedRequest(reqUrl) {
 	//create a deferred object from Q
	var deferred  = Q.defer();
	var req = http.get(reqUrl, function(response) {
	  //set the response encoding to parse json string
	  response.setEncoding('utf8');
	  var responseData = '';
	  //append data to responseData variable on the 'data' event emission
	  response.on('data', function(data) {
	  	responseData += data;
	  });
	  //listen to the 'end' event
	  response.on('end', function() {
	  	//resolve the deferred object with the response
	  	deferred.resolve(responseData);
	  });
	});

	//listen to the 'error' event
	req.on('error', function(err) {
	  //if an error occurs reject the deferred
	  deferred.reject(err);
        });
        //we are returning a promise object
        //if we returned the deferred object
        //deferred object reject and resolve could potentially be modified
        //violating the expected behavior of this function
        return deferred.promise;
};
PRequest(url)
.then(function(newsResponse) { //callback invoked on deferred.resolve
	console.log(JSON.parse(newsResponse));
}, function(newsError) { //callback invoked on deferred.reject
	console.log(newsError);
});
