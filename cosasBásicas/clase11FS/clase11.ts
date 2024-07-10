import * as fs from "fs";

let texto1:string="Este es el segundo texto de esta clase"; //escribimos el texto
texto1 += ", tercer codigo pa!"; 

fs.writeFileSync("texto1.txt", texto1); //guardamos el texto como texto1.txt
                                        //importante recordar que esta acción NO SE PUEDE REESCRIBIR

let info:string = fs.readFileSync("./Texto1.txt", { encoding: 'utf8'}); //traemos el archivo guardado

console.log(info);                      // mostramos el archivos guardado