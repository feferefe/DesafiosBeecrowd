var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');

const pi = 3.14159;

var raio = parseFloat(lines.shift());

// Calcula a área 
var area = pi * (raio * raio);

console.log('A='+ area.toFixed(4));