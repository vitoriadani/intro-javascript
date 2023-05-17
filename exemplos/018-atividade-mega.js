
/*
    programa da mega sena
    crie um programa que compare o resultado de dois    arrays 
*/  

const entrada = requirte('prompt-sync') ();

let resMegaSena =[5, 15, 25, 35, 45, 55];
let meuJogo = [];
let acertos = 0;

for (
    let i = 0; i < 6; i++) {
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

console.log('voce acertou ' + acertos + ' numero' + (acertos > 1 ? 's' : ''));