var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines.shift());

var b = parseInt(lines.shift());

var PROD = a * b;

console.log("PROD = " + PROD);