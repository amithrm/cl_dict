var Request = require('./getrequest.js')

var host = "http://api.wordnik.com:80/v4/";
var limit = 5;
var path = '';

var get_relatedwords = function(op,word){
    path = 'word.json/'+word+'/relatedWords'
    var querystring = {
        limitPeRelationshipType : limit,
        useCanonical : "false",
        api_key : "a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"
    }
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
        if (op=='syn') {
            var len = response.length;
            var count = 0;
            for (i=0;i<len;i++){
                if (response[i].relationshipType=='synonym'){
                    console.log("synonyms :"+response[i].words);
                    count++;
                }
            }
            console.log('\n');
            if(count==0){
                console.log("Sorry, no synonyms found");
                console.log('\n');
            }

        } else if(op=='ant'){
            var len = response.length;
            var count = 0;
            for (i=0;i<len;i++){
                if (response[i].relationshipType=='antonym'){
                    console.log("antonyms :"+response[i].words);
                    count++;
                }
            }
            console.log('\n');
            if(count==0){
                console.log("Sorry, no antonyms found");
                console.log('\n');
            }
        } else if (op=='synant'){
            var len = response.length;
            var count1 = 0;
            var count2 = 0;
            for (i=0;i<len;i++){
                if (response[i].relationshipType=='synonym'){
                    console.log("synonyms :"+response[i].words);
                    count1++;
                }
            }
            console.log('\n');
            for (i=0;i<len;i++){
                if (response[i].relationshipType=='antonym'){
                    console.log("antonyms :"+response[i].words);
                    count2++;
                }
            }
            console.log('\n');
            if(count1==0){
                console.log("Synonyms : Sorry, no synonyms found")
                console.log('\n');
            }

            if(count2==0){
                console.log("Antonyms : Sorry, no antonyms found");
                console.log('\n');
            }

        }
    });
}

module.exports = get_relatedwords;
