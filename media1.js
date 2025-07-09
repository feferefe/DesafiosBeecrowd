var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines.shift());

var b = parseFloat(lines.shift());

var pesoA = 3.5;

var pesoB =  7.5;

var somaPeso = pesoA + pesoB;

var MEDIA = (a * pesoA + b * pesoB)/somaPeso;

console.log('MEDIA = ' + MEDIA.toFixed(5));