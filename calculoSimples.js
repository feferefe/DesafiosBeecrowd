var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');

// Lê a primeira linha e divide os valores pelo espaço
var peca1_info = lines.shift().split(" ");
// Lê a segunda linha e divide os valores pelo espaço
var peca2_info = lines.shift().split(" ");

// Pega cada parte da primeira peça
var codigoPeca1 = parseInt(peca1_info[0]);
var numPecas1 = parseInt(peca1_info[1]);
var valorPecas1 = parseFloat(peca1_info[2]);

// Pega cada parte da segunda peça
var codigoPeca2 = parseInt(peca2_info[0]);
var numPecas2 = parseInt(peca2_info[1]);
var valorPecas2 = parseFloat(peca2_info[2]);

// Calcula o valor total
var valorPago = (numPecas1 * valorPecas1) + (numPecas2 * valorPecas2);

console.log("VALOR A PAGAR: R$ " + valorPago.toFixed(2));