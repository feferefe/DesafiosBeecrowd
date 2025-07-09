var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');

var nomeVendedor = lines.shift();

var salarioFixo = parseFloat(lines.shift());

var totalVendas = parseFloat(lines.shift());

var comissao = 0.15;

var totalRecebido = salarioFixo + totalVendas * comissao;

console.log('TOTAL = R$ ' + totalRecebido.toFixed(2));