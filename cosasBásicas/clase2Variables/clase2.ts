var readlineSync = require('readline-sync');

let base: number = readlineSync.questionInt("Ingresar Base: ");
let altura: number = readlineSync.questionInt("Ingresar altura: ");

let Area: number = base * altura;

console.log("El área del rectángulo es: ", Area);
