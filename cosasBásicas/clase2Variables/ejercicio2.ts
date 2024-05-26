var readlineSync = require('readline-sync');

let precio: number = readlineSync.questionInt("\n Precio del producto:");

let total: number= precio * 0.9;

console.log("\nEl precio total luego de agregarle un descuento del 10% es ", total);