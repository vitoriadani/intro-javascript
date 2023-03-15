let entrada = require('prompt-sync')();
console.log('programa que calcula a media de tres idades diferentes')
let nome1 = entrada('digite o primeiro nome ');
let idade1 = parseInt(entrada('digite a primeira idade '));
let nome2  = entrada('digite o segundo nome ');
let idade2  = parseInt(entrada('digite a segunda idade '));
let nome3  = entrada('digite o terceiro nome ');
let idade3  = parseInt(entrada('digite a terceira idade '));
let soma  = idade1 + idade2 + idade3;
let divisao = soma / 3;
console.log ( + soma)

console.log('media entre as 3 idade é: ' +  divisao)