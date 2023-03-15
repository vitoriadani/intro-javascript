 // crie um programa que receba seu nome e sua idade
 // e apresente na saida qual sera sua idade daqui a 25 anos
 // saida - "ewerton daqui 25 anos sua idade sera 50"

  let entrada = require('prompt-sync') ();
  let nome = entrada( 'digite seu nome: ');
  let idade = parsaint(entrada('digite sua idade '));

  let idade25 = idade + 25;
  
  console.log(nome + 'daqui a 25 anos sua idade sera' + idade25);