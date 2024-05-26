"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var fs = require("fs");
var matriz = [];
function cargar() {
    for (var i = 0; i < 3; i++) {
        var producto = rls.question("Ingrese el nombre del producto ".concat(i + 1, ": "));
        var precio = 0;
        while (precio <= 0) {
            precio = rls.questionInt("Ingrese el precio de ".concat(producto, ": "));
            if (precio <= 0) {
                console.log("El precio debe ser mayor que cero. Inténtelo de nuevo.");
            }
            matriz[i] = [producto, "$".concat(precio)];
        }
    }
}
cargar();
console.log("Matriz:");
console.log(matriz);
var matrizComoJSON = JSON.stringify(matriz);
fs.writeFileSync("lista.txt", matrizComoJSON);
