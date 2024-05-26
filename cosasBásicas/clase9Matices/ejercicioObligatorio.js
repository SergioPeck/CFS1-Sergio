"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var cantidad = readlineSync.questionInt("Ingrese la cantidad de numeros que quiere ingresar: ");
var positivosNeutralesNegativos = new Array(cantidad);
positivosNeutralesNegativos[0] = 0; //positivo
positivosNeutralesNegativos[1] = 0; //neutro
positivosNeutralesNegativos[2] = 0; //negativo
for (var i = 1; i < cantidad + 1; i++) {
    var n = readlineSync.questionInt("Ingrese su numero ".concat(i, ": "));
    if (n < 0) {
        positivosNeutralesNegativos[0]++;
    }
    else if (n === 0) {
        positivosNeutralesNegativos[1]++;
    }
    else {
        positivosNeutralesNegativos[2]++;
    }
}
console.log("Usted ha ingresado ".concat(positivosNeutralesNegativos[0], " numeros postivos, ").concat(positivosNeutralesNegativos[1], " numeros neutros y ").concat(positivosNeutralesNegativos[2], " numeros negativos"));
