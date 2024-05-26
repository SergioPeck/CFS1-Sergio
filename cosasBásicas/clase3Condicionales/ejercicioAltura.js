var readlineSync = require('readline-sync');
var altura = readlineSync.question("\nIndique su altura en centimetros: ");
if (altura < 130) {
    console.log("\n No puedes subir");
}
else if (altura >= 130) {
    console.log("\n Puede subir");
}
