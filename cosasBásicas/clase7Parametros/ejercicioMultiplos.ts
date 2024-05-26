/*Cree un método esMultiplo con 2 parámetros que devuelva el valor lógico verdadero o falso según si el primer número
que se indique como parámetro es múltiplo del segundo 
Recuerde que un numero es múltiplo de otro si al dividirlo su resto es cero
Recuerde que la operación mod permite saber si el resto de una división es cero */
import * as readlineSync from "readline-sync";

let numero1: number = readlineSync.questionInt("\nIngrese su primer numero: ");
let numero2: number = readlineSync.questionInt("Ingrese su segundo numero: ");

let esMultiplo = (numero1: number, numero2: number): boolean => {
    return numero1 % numero2 ==0;
};
let resultadoBoolean: boolean = esMultiplo(numero1, numero2);

console.log(`El número ${numero1} es múltiplo de ${numero2}?`, resultadoBoolean);

