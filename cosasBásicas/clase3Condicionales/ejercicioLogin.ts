var readlineSync = require('readline-sync');

let correo:string = "sergiopeckerle2004@gmail.com";
let contra:string ="contrasenaReal";

let correoVálido = readlineSync.question("Ingrese correo electronico: ");
let ConstraseñaVálida = readlineSync.question("Contrasena: ");

if (correoVálido == correo && ConstraseñaVálida==contra){
    console.log("Bien hecho campeón");
}else{
    console.log("sos pelotudo");
}