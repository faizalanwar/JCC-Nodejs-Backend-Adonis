var funcLib = require('./lib/funcLib');

var teriak = funcLib.teriak;
var kalikan = funcLib.kalikan;
var introduce = funcLib.introduce;

var args = process.argv 
// console.log(args);
// console.log(teriak());
switch (args[2]) {
    case 'teriak':
      console.log(teriak());
      break;
    case 'kalikan':
      var hasilKali = kalikan(args[3], args[4]);
      console.log(hasilKali) 
      break;
    case 'kenalan':
      var perkenalan = introduce(args[3], args[4], args[5], args[6]);
      console.log(perkenalan);
      break;
    default:
      console.log("Wrong case");
      break;
};