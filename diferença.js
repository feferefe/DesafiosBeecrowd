var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines.shift());

var b = parseInt(lines.shift());

var c = parseInt(lines.shift());

var d = parseInt(lines.shift());

var DIFERENCA = (a * b - c * d);

console.log("DIFERENÇA = " + DIFERENCA);