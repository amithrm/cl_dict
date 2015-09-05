var Get_Examples = require('./getexamples.js')
var Get_Definitions = require('./getdefinitions.js')
var Get_RelatedWords = require('./getrelatedwords.js')
var Get_DictWordOtd = require('./getdictwordotd.js')

var op = process.argv[2];
var word = process.argv[3];

if (op==undefined&&word==undefined){
    op ='wotd';
} else if (op!=undefined&&word==undefined){
    word = op
    op ='dict';
}

switch (op){
case 'ex':
    console.log('word : '+word);
    Get_Examples(word);
    break;
case 'def':
    console.log('word : '+word);
    Get_Definitions(word);
    break;
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
case 'play':
case 'wotd':
    Get_DictWordOtd();
    break;
default:
    console.log("not a valid request");
}
