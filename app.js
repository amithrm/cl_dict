var Get_Examples = require('./getexamples.js')
var Get_Definitions = require('./getdefinitions.js')
var Get_RelatedWords = require('./getrelatedwords.js')
var Get_DictWordOtd = require('./getdictwordotd.js')

var op = process.argv[2];
var word = process.argv[3];


switch (op){
case 'ex':
    console.log('word : '+word);
    Get_Examples(word);
    break;
case 'def':
    console.log('word : '+word);
    Get_Definitions(word);
    break;
case 'syn':
    console.log('word : '+word);
    Get_RelatedWords('syn',word);
    break;
case 'ant':
    console.log('word : '+word);
    Get_RelatedWords('ant',word);
    break;
case 'dict':
    console.log('word : '+word);
    Get_Examples(word);
    Get_Definitions(word);
    Get_RelatedWords('synant',word);
    break;
case undefined:
    Get_DictWordOtd();
}
