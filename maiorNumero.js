var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');

let [A, B, C] = input.split(' ').map(item => parseInt(item));

// Encontra o maior valor entre A e B
let maiorAB = (A + B + Math.abs(A-B))/2;

// Encontra o maior valor entre o resultado de maiorAB e C
let maiorFinal = (maiorAB + C + Math.abs(maiorAB - C))/2;

console.log(maiorFinal + ' eh o maior');