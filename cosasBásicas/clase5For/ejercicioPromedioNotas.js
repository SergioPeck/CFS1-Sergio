"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var notas = 0;
var cantidadNotas = readlineSync.questionInt("\ncuantas notas quieres promediar? ");
for (var numero = 1; numero < cantidadNotas + 1; numero++) {
    notas = notas + readlineSync.questionInt("\nIngrese su nota " + numero + ": ");
}
console.log("El promedio de notas es:", notas / cantidadNotas);
