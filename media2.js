var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines.shift())

var b = parseFloat(lines.shift())

var c = parseFloat(lines.shift())

var pesoA = 2;

var pesoB = 3;

var pesoC = 5;

var somaPesoABC = pesoA + pesoB + pesoC;

var MEDIA = (a * pesoA + b * pesoB + c * pesoC)/somaPesoABC;

console.log("MEDIA = " + MEDIA.toFixed(1));