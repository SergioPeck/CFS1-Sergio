var readlineSync = require("readline-sync")

let precioCompra:number = readlineSync.question("\nPrecio de la compra ");

let Cantidad:number =readlineSync.question("\ncantidad ");

let total = (precioCompra*Cantidad);

if (total>999){
    console.log('\n Total a pagar con un descuento del 10% ;): ',total*0.9, '\n');
}else if (total<1000){
    console.log('\n Total a pagar: ', total, '\n');
}