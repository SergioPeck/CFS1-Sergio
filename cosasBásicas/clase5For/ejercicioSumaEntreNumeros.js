"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numero1 = readlineSync.questionInt("\nIngrese el numero 1: ");
var numero2 = readlineSync.questionInt("\nIngrese el numero 2: ");
var sumas = 0;
while (numero1 < numero2) {
    sumas += numero1; // Sumar numero1 a sumas en cada iteración
    numero1++; // Incrementar numero1 para avanzar hacia numero2
}
console.log("la suma sería: " + sumas);
