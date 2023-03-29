// estruturas condicionais

const entrada = require('prompt-sync') ();

let nome = entrada('digite seu nome: ');
let letra =  nome.charAt(0).toLocaleLowerCase;

let vogais = /[aeiou]/; //regex

if (vogais.test(letra)) {
    console.log('a 1ª letra do seu nome éuma vogal!');
} else {
    console.log('a 1 ª letra do seu nome é uma consoante!');
}

