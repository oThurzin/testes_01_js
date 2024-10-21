// Faça um programa que leia 3 números e exiba-os na tela.

var readlineSync = require('readline-sync');

var v1 = Number(readlineSync.question('Digite um numero: '));
var v2 = Number(readlineSync.question('Agora outro: '));
var v3 = Number(readlineSync.question('apenas mais um: '));

console.log(v1, v2, v3);