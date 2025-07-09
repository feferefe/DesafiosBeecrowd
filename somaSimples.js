var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines.shift());

var b = parseInt(lines.shift());

var SOMA = a + b;

console.log("SOMA = " + SOMA);

