"use strict";

var _esLib = require("./lib/esLib");

var _dataInput = _interopRequireDefault(require("./lib/dataInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var args = process.argv;

switch (args[2]) {
  case 'sapa':
    (0, _esLib.sapa)(args[3]);
    break;

  case 'convert':
    console.log((0, _esLib.toObject)(args[3], args[4], args[5]));
    break;

  case 'checkScore':
    console.log((0, _esLib.checkScore)(args[3]));
    break;

  case 'filterData':
    console.log((0, _esLib.filterData)(_dataInput["default"], args[3]));
    break; 
  default:
    console.log("Inputan Salah");
    break;
}

;