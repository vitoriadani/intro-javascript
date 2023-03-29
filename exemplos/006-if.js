// estruturas condicionais

const entrada = require ('prompt-sync') ();

let idadeTxt = entrada ('digite sua idade: ');
let idade = parseInt (idadeTxt);

if(idade > 18) {
    console.log('voce tem mais de 18 anos!');
}

if (idade < 18) {
    console.log('voce tem menos de 18 anos!');
}

if (idade === 18) {
    console.log('voce tem 18 anos!');
}