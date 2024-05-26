var readlineSync = require('readline-sync');
var posicion = readlineSync.question("\n Posicion en numero: ");
if (posicion == 1) {
    console.log("\n Se entregará la medalla de oro\n");
}
else if (posicion == 2) {
    console.log("\n Se entregará la medalla de plata\n");
}
else if (posicion == 3) {
    console.log("\n Se entrefará la medalla de bronce\n");
}
