var readlineSync = require('readline-sync');
var base = readlineSync.questionInt("Ingresar Base: ");
var altura = readlineSync.questionInt("Ingresar altura: ");
var Area = base * altura;
console.log("El área del rectángulo es: ", Area);
