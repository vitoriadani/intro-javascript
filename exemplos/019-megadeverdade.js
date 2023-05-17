/*
    programa da mega sena
    crie um programa que compare o resultado de dois    arrays 
*/  

const entrada = require('prompt-sync')();

let resMegaSena =[];
let meuJogo = [];
let acertos = 0;
  
for (let i = 0; i < 6; i++) {
     const numero = Math.floor(Math.random() * 60) + 1;
     resMegaSena.push(numero);
}
for (
    let i = 1; i < 6; i++) {
        let numero = entrada ('digite o ' + i + 'º nº do jogo:');
        meuJogo.push(numero);
    }

for(let nMega = 0; nMega < resMegaSena.length; nMega++) {
    for (let nJogo = 0; nJogo < meuJogo.length; nJogo++) {
        if (resMegaSena[nMega] == meuJogo[nJogo]) {
         acertos ++;
        }
    }
}

let mensagem = 'Resultado do sorteio ';

for (let n= 0; n < resMegaSena.length; n++){
    mensagem = mensagem + resMegaSena[n] + (resMegaSena.length == n + 1 ? '' : ' - ');
}
mensagem = 'Seu jogo ';

for (let n= 0; n < resMegaSena.length; n++){
    mensagem = mensagem + meuJogo[n] + (meuJogo.length == n + 1 ? '' : ' - ');
}

console.log('voce acertou ' + acertos + ' numero' + (acertos > 1 ? 's' : ''));