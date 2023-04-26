/* 
crie um programa que receba o nome e a nota de 4 materias.
exibir o nome das 4 materias com a nota e a media final.
ex:
matematica: 7,00
ingles: 10,00
geografia : 8,00
fisica : 8,00
media : 8,25

Crie um programa que receba o nome e a nota de
4 matérias.
Exibir o nome das 4 matérias com a nota e a média final.
Ex:
Matemática: 7,00
Inglês: 10,00
Geografia: 8,00
Física: 8,00
Média: 8,25
*/

const entrada = require('prompt-sync')();

let mat1 = entrada('Digite o nome da 1ª matéria: ')
let n1 = parseFloat(entrada('Digite a nota de ' + mat1 + ': '));
let mat2 = entrada('Digite o nome da 2ª matéria: ');
let n2 = parseFloat(entrada('Digite a nota de ' + mat2 + ': '));

let mat3 = entrada('Digite o nome da 3ª matéria: ')
let n3 = parseFloat(entrada('Digite a nota de ' + mat3 + ': '));

let mat4 = entrada('Digite o nome da 4ª matéria: ')
let n4 = parseFloat(entrada('Digite a nota de ' + mat4 + ': '));

let media = (n1 + n2 + n3 + n4) / 4;

console.log('Notas: ');
console.log(mat1 + ': ' + n1.toFixed(2));
console.log(mat2 + ': ' + n2.toFixed(2));
console.log(mat3 + ': ' + n3.toFixed(2));
console.log(mat4 + ': ' + n4.toFixed(2));
console.log('Média: ' + media.toFixed(2));  