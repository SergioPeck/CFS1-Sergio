"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var texto1 = "Este es el segundo texto de esta clase"; //escribimos el texto
texto1 += ", tercer codigo pa!";
fs.writeFileSync("texto1.txt", texto1); //guardamos el texto como texto1.txt
//importante recordar que esta acción borra el archivo creado(si hau) y lo reemplaza con esto, NO SE PUEDE REESCRIBIR
//reescribimos el string info
var info = fs.readFileSync("./Texto1.txt", { encoding: 'utf8' }); //traemos el archivo guardado
console.log(info); // mostramos el archivos guardado
