var readlineSync = require("readline-sync");
var precioCompra = readlineSync.question("\nPrecio de la compra ");
var Cantidad = readlineSync.question("\ncantidad ");
var total = (precioCompra * Cantidad);
if (total > 999) {
    console.log('\n Total a pagar con un descuento del 10% ;): ', total * 0.9, '\n');
}
else if (total < 1000) {
    console.log('\n Total a pagar: ', total, '\n');
}
