"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Cree un método esMultiplo con 2 parámetros que devuelva el valor lógico verdadero o falso según si el primer número
que se indique como parámetro es múltiplo del segundo
Recuerde que un numero es múltiplo de otro si al dividirlo su resto es cero
Recuerde que la operación mod permite saber si el resto de una división es cero */
var readlineSync = require("readline-sync");
var numero1 = readlineSync.questionInt("\nIngrese su primer numero: ");
var numero2 = readlineSync.questionInt("Ingrese su segundo numero: ");
var esMultiplo = function (numero1, numero2) {
    return numero1 % numero2 == 0;
};
var resultadoBoolean = esMultiplo(numero1, numero2);
console.log("El n\u00FAmero ".concat(numero1, " es m\u00FAltiplo de ").concat(numero2, "?"), resultadoBoolean);
