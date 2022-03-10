var funcLib = require('./lib/arrayLib');
var input = require('./lib/dataInput');

var range = funcLib.range;
var rangeWithStep = funcLib.rangeWithStep;
var sum = funcLib.sum;
var dataHandling = funcLib.dataHandling;
var balikKata = funcLib.balikKata;

var args = process.argv 

switch (args[2]) {
    case 'range':
      console.log(range(args[3],args[4]));
      break;
    case 'rangeWithStep':
      console.log(rangeWithStep(args[3],args[4],args[5]));
      break;
    case 'sum':
      console.log(sum(args[3],args[4],args[5]));
      break;
    case 'dataHandling':
      dataHandling(input);
      break;
    case 'balikKata':
      balikKata(args[3]);
      break;
    // Tambahkan default
    default:
      console.log("Inputan Salah");
      break;
};