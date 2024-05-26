var readlineSync = require('readline-sync');
var correo = "sergiopeckerle2004@gmail.com";
var contra = "contrasenaReal";
var correoVálido = readlineSync.question("Ingrese correo electronico: ");
var ConstraseñaVálida = readlineSync.question("Contrasena: ");
if (correoVálido == correo && ConstraseñaVálida == contra) {
    console.log("Bien hecho campeón");
}
else {
    console.log("sos pelotudo");
}
