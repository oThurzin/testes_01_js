var readlineSync = require('readline-sync');

var v1 = Number(readlineSync.question('Digite um numero: '));
var v2 = Number(readlineSync.question('Agora outro: '));
var v3 = Number(readlineSync.question('apenas mais um: '));


var m = v1 + v2 + v3 / 3

console.log(m);