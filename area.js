var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');

var [A, B, C] = input.split(' ').map(item => parseFloat(item));

const pi = 3.14159;

// Calculando área do triangulo retangulo ((base * altura) / 2)
let areaTriangulo = (A * C) / 2;

// Calculando área do círculo (A = pi * raio * raio)
let areaCirculo = pi * Math.pow(C, 2);

// Calculando área do trapézio ((Base maior + Base menor) * altura / 2)
let areaTrapezio = (A + B) * C / 2;

// Calculando área do quadrado (lado * lado)
let areaQuadrado = B * B;

// Calculando área do retangulo (base * altura)
let areaRetangulo = A * B;

// Imprimindo valores
console.log('TRIANGULO: ' + areaTriangulo.toFixed(3));
console.log('CIRCULO: ' + areaCirculo.toFixed(3));
console.log('TRAPEZIO: ' + areaTrapezio.toFixed(3));
console.log('QUADRADO: ' + areaQuadrado.toFixed(3));
console.log('RETANGULO: ' + areaRetangulo.toFixed(3));