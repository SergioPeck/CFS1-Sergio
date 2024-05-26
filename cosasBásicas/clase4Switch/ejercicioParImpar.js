"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var pedirNumero = readlineSync.questionInt("\n Ingrese un numero: ");
var variable;
if (pedirNumero !== 0) {
    if (pedirNumero % 2 === 0) {
        variable = true;
    }
    else {
        variable = false;
    }
    switch (variable) {
        case true:
            console.log("Es par");
            break;
        case false:
            console.log("Es impar");
            break;
    }
}
else {
    console.log("El número cero no es válido.");
}
