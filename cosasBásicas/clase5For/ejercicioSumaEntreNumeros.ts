import * as readlineSync from 'readline-sync';

let numero1: number = readlineSync.questionInt("\nIngrese el numero 1: ");
let numero2: number = readlineSync.questionInt("\nIngrese el numero 2: ");
let sumas: number = 0;

while (numero1 < numero2) {
    sumas += numero1; 
    numero1++;
}

console.log("la suma sería: " + sumas);
