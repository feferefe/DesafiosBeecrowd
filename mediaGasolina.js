var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');

// Distância percorrida em Km
let X = parseInt(lines.shift());

// Total de combustível gasto
let Y = parseFloat(lines.shift());

// Calculando a média (Distância / litros)
let mediaGasolina = X / Y;

console.log(mediaGasolina.toFixed(3) + ' km/l')