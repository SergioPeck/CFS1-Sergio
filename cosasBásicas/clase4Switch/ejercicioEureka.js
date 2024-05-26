"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var contrasena = ("eureka");
var intentos = 0;
var insertarContrasena;
while (intentos < 3) {
    insertarContrasena = readlineSync.question("\nIngresar contrasena: ");
    if (insertarContrasena == contrasena) {
        console.log("Correcto");
    }
    else {
        console.log("Contraseña equivocada, te quedan " + (2 - intentos) + " oportunidades");
        intentos++;
    }
}
console.log("\ncagaste pa, bloqueamos tu cuenta por boludo y encima te 'protegemos tu dinero' por tiempo indefinido\n");
