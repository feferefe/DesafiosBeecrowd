var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');

// Valor do Raio 
let R = parseFloat(lines.shift());

const pi = 3.14159;

// Calcula o volume da esfera ((4/3)*pi*raio³) 
let volume = (4.0/3) * pi * Math.pow(R, 3);

console.log('VOLUME = ' + volume.toFixed(3));