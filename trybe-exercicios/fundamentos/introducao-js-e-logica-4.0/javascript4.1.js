// Exercicio 1
const a = 10;
const b = 25; 

let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

console.log(adicao, subtracao, multiplicacao, divisao, modulo)

//Exercicio 2
if  (a > b) {
 console.log("a é maior que b")
}
 else {
  console.log ("b é maior que a")
 }

 //Exercicio 3
 let valor1 = 20
 let valor2 = 12
 let valor3 = 24

 if (valor1 > valor2 && valor1 > valor3){
     console.log("valor1 é maior que os outros dois")
 }
 else if (valor2 > valor1 && valor2 > valor3) {
     console.log("valor2 é maior que os outros")
 }
 else {
     console.log("valor3 é maior que os outros dois")
 }
 //Exercicio 4 

 const opcao1 = 20;
 const opcao2 = - 28; 

 if (opcao1 > 0 ){
     console.log("positive")
 }
 else if (opcao1 < 0 ) {
     console.log("negative")
 } 
 else {
     console.log("0")
 }

 if (opcao2 > 0 ){
    console.log("positive")
}
else if (opcao2 < 0 ) {
    console.log("negative")
} 
else {
    console.log("0")
}
 //Exercicio 5
 let ladoAdoTriangulo = 60;
 let ladoBdoTriangulo = 60;
 let ladoCdoTriangulo = 60;

 if (ladoAdoTriangulo + ladoBdoTriangulo + ladoCdoTriangulo == 180) {
     console.log("true")
 }
 else if (ladoAdoTriangulo + ladoBdoTriangulo + ladoCdoTriangulo != 180) {
    console.log("false")
 }
else {
    console.log("erro")
}
//Exercicio 6

let peçasdexadrez = 'Rei';

switch (peçasdexadrez.toLowerCase()) {
    case 'rei' :
        console.log('Anda apenas uma casa')
        break;
    case 'rainha':
        console.log ('Anda em qualquer direção')
        break;
    case 'torre' :
        console.log ('Anda na horizontal e vertical')
        break;
    case 'cavalo': 
        console.log('Anda em L')
        break;
    case 'peão' :
        console.log('Anda apenas uma casa,')
        break;
    case 'bispo' : 
        console.log('Anda apenas na diagonal')
        break;
    default: console.log('ERRO: PEÇA INVÁLIDA!!')
}
// Exercicio 7

let notas = 68;

if (notas <= 100 && notas >= 90) {
    console.log('Nota A')}
else if (notas < 90 && notas >= 80){
    console.log("Nota B")}
else if (notas < 80 && notas >= 70){
    console.log ('Nota C')}
else if (notas < 70 && notas >=60){
    console.log('Nota D')}
else if (notas < 60 && notas >= 50){
    console.log('Nota E')}
else if (notas < 50 ){
   console.log('Nota F')}
else if (notas < 0 || notas > 100){
   console.log('ERRO!!')
}
// Exercicio 8) Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

const ImparOuPar1 = 5;
const ImparOuPar2 = 6;
const ImparOuPar3 = 5; 

if (ImparOuPar1 === % 2 0 || ImparOuPar2 % 2 === 0 || ImparOuPar3 % 2 === 0) {
    console.log(true)}
else {
    console.log(false)
}

const numero1 = 6;
const numero2 = 8;
const numero3 = 54;

if (numero1 % 2 > 0 || numero2 % 2 > 0 || numero3 % 2 > 0) {
    console.log(true)}
else {
    console.log(false)
}

// Exercicio 10) Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

const custo = 15;
const valorDeVenda = 29;
let custoImposto = custo * 20/100;
let custoMaisImposto = custoImposto + custo; 
let lucro = valorDeVenda - custoMaisImposto;
let lucroMilPeças = lucro * 1000;

if (custo < 0 || valorDeVenda < 0) {
    console.log('ERRO!')
}
else{
    console.log (lucroMilPeças)
}




