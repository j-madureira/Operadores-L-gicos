/*Criar duas váriaveis, as duas variáveis terão valores do Tipo Number diferentes.
  Uma variável com uma que diz que a idade é maior que 23 e outra variável que diz
  que a idade é menor que 40, criar uma variável com uma idade fixa para testar o true
  depois mudar a idade fixa para testar o false
  Utilizar os operadores de comparação e o comparador lógico && 
*/

//Testando o true com o operador lógico &&
var idade = 23;
var maiorQue = idade > 22;
var menorQue = idade < 41;

var comparar = maiorQue && menorQue;
console.log(comparar);

//Testando o false com o operador lógico &&
var idade = 20;
var maiorQueIdade = idade > 22;
var menorQueIdade = idade < 40;

var comparadorDois = maiorQueIdade && menorQueIdade;
console.log(comparadorDois);

/*Operador lógico || criar uma variável com idade fixa, criar uma variável
  Para comparar se o valor da idade fixa é menor que 10, criar outra variável
  Para comparar se o valor é maior ou igual que 27
*/

//Testando o true com o operador lógico ||
var idadeFixa = 7;
var idadeMenor10 = idadeFixa < 10;
var idadeMaiorIgual27 = idadeFixa >= 27;

var compararIdadeFixa = idadeMenor10 || idadeMaiorIgual27;
console.log("Esta ou não entre as idades menor que 10 ou maior e igual 27?",compararIdadeFixa);

/*Criar uma variável com um valor do tipo Number = 12
  Criar uma variável que verifica se o valor da primeira variável é maior ou igual a 12
  Criar uma variável que verifica se o valor da primeira variável é menor ou igual 14
  Criar uma variável que inverte esse valor que vai ser true caso eu comparace com && ou
  || */

//Invertendo o valor boolean com o operador lógico !
  var numero = 1;
  var numeroMaiorIgual = numero >= 12;
  var numeroMenorIgual = numero <= 14;

  var inverte = !numeroMaiorIgual && numeroMenorIgual;
  console.log(inverte);
