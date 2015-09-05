var Get_Examples = require('./getexamples.js')
var Get_Definitions = require('./getdefinitions.js')
var Get_RelatedWords = require('./getrelatedwords.js')

var op = process.argv[2];
var word = process.argv[3];


console.log('word : '+word);
switch (op){
case 'ex':
    Get_Examples(word);
    break;
case 'def':
    Get_Definitions(word);
    break;
case 'syn':
    Get_RelatedWords('syn',word);
    break;
case 'ant':
    Get_RelatedWords('ant',word);
    break;
case 'dict':
    Get_Examples(word);
    Get_Definitions(word);
    Get_RelatedWords('synant',word);
    break;
}
