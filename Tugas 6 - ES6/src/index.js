import {sapa, toObject, checkScore, filterData} from './lib/esLib'
import input  from './lib/dataInput'

var args = process.argv 

switch (args[2]) {
    case 'sapa':
      sapa(args[3]);
      break;
    case 'convert':
      console.log(toObject(args[3],args[4],args[5]));
      break;
    case 'checkScore':
        console.log(checkScore(args[3]));
      break;
    case 'filterData':
        console.log(filterData(input, args[3]));
      break;
    default:
      console.log("Inputan Salah");
      break;
};
