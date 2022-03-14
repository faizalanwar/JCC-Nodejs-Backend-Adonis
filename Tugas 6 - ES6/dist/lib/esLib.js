"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterData = exports.checkScore = exports.toObject = exports.sapa = void 0;

var sapa = function sapa(nama) {
  console.log("halo selamat pagi, ".concat(nama));
};

exports.sapa = sapa;

var toObject = function toObject(nama, domisili, umur) {
  var result = {
    nama: nama,
    domisili: domisili,
    umur: umur
  };
  return result;
};
 
exports.toObject = toObject;

var checkScore = function checkScore(data) {
  var values = data.split(",");
  var i,
      value = [];

  for (i = 0; i < values.length; i++) {
    value.push(values[i].split(":"));
  }

  var result = {};

  for (i = 0; i < value.length; i++) {
    result[value[i][0]] = value[i][1];
  }

  return result;
};
 
exports.checkScore = checkScore;

var filterData = function filterData(data, kelas) {
  return data.filter(function (nama) {
    return nama["class"] == kelas;
  });
};
 


exports.filterData = filterData;