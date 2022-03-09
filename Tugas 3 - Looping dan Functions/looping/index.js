var funcLib = require('./lib/funcLib');

var loopingWhile = funcLib.loopingWhile;
var loopingFor = funcLib.loopingFor;
var persegiPanjang = funcLib.persegiPanjang;
var tangga = funcLib.tangga;
var papanCatur = funcLib.papanCatur;

var args = process.argv 

switch (args[2]) {
    case 'while':
      loopingWhile();
      break;
    case 'for':
      loopingFor();
      break;
    case 'persegiPanjang':
      persegiPanjang(args[3],args[4]);
      break;
    case 'tangga':
      tangga(args[3]);
      break;
    case 'catur':
      papanCatur(args[3]);
      break;
    default:
      console.log("Wrong case");
      break;
};