var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');

var numFuncionario = parseInt(lines.shift());

var numHorasTrabalhadas = parseInt(lines.shift());

var numValorHora = parseFloat(lines.shift());

// Calculo do valor do salário (valor da hora * horas trabalhadas)
var numValorSalario = numValorHora * numHorasTrabalhadas;

console.log("NUMBER = " + numFuncionario + "\nSALARY = U$ "  +numValorSalario.toFixed(2));