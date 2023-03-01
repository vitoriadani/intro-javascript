// o comando abaixo apresenta  uma mensagem na tela
console.log("ola estou programando em javascript");
/*
       comentario que ocupa mais
       de uma linha
*/

// criaçao de variavel do tipo texto
let nome = 'daniele vitoria';
// criaçao de variavel do tipo numerico (inteiro)
let idade = 16;
// criaçao de variavel do tipo numerico (decimal)
let altura = 1.68;
// criaçao de variavel do tipo verdadeiro/falso
let trabalha = true; // = verdadeiro | false = falso
// exemplo de variavel de nome composto
let corFavorita = 'preto';
// exemplo de variavel do tipo lista de valores
let cores_favoritas = ['preto', 'azul bebe', 'roxo pastel'];
// exemplo de variavel que armazena um objeto
let endereco ={
    'longradouro'        : 'rua',
    'nome_longradouro'   : 'brasil',
    'numero'             : '50 a',
    'bairro'             : 'centro',
    'cidade'             : 'tupa',

};
let covid;
let dengue = null;


  console.log('nome: ' + nome);
  console.log('idade: ' + idade);
  console.log('altura: ' + altura);
  console.log('trabalha: ' + trabalha);
  console.log('cor favorita: ' + corFavorita);
  console.log('cores favoritas: ' + cores_favoritas[0] + ', ' + cores_favoritas[1] + ', ' + cores_favoritas[2]);
  console.log('endereço: ' + endereco.longradouro + ' ' + endereco.nome_longradouro + ' , ' + endereco.numero  + ' - ' + endereco.bairro  + ' - ' + endereco.cidade);
  console.log('covid: ' + covid);
  console.log('dengue: ' + dengue);
