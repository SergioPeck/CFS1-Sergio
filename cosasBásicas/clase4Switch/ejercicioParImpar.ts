import * as readlineSync from 'readline-sync';

let pedirNumero = readlineSync.questionInt("\n Ingrese un numero: ");

let variable;

if (pedirNumero !== 0) {
    if (pedirNumero % 2 === 0) {
        variable = true;
    } else {
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
} else {
    console.log("El número cero no es válido.");
}
