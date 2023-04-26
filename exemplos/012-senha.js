
const  entrada = require('prompt-sync') ();

const senha = '1357908642';
let sennhaDigitada ='';

do {
    senhaDigitada = entrada('digite sua senha para entrar!');
} while (senha !=senhaDigitada);

console.log('voce acessou o sistema!');
