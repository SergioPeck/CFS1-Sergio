"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var base = readlineSync.questionInt("Ingrese la base: ");
var exponente = readlineSync.questionInt("ingrese el exponente: ");
var resultado = 0;
if (exponente >= 0) {
    if (exponente == 0) {
        resultado = 1;
    }
    else if (exponente > 0) {
        resultado = Math.pow(base, exponente);
    }
    else {
        resultado = 1;
    }
}
console.log("Tu resultado es: " + resultado);
