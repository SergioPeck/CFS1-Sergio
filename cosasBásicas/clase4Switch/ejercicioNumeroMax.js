"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var funcionamiento = false;
var numerito = readlineSync.questionInt("\nIngrese su numerito: ");
var numeroMaximo = numerito;
while (numerito != 0) {
    funcionamiento = true;
    if (numerito > numeroMaximo) {
        numeroMaximo = numerito;
    }
    else {
        numerito = readlineSync.questionInt("Ingrese otro numerito pls: ");
    }
}
if (funcionamiento) {
    console.log("Su numero maximo es:", numeroMaximo);
}
