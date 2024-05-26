var readlineSync = require('readline-sync');
var precio = readlineSync.questionInt("\n Precio del producto:");
var total = precio * 0.9;
console.log("\nEl precio total luego de agregarle un descuento del 10% es ", total);
