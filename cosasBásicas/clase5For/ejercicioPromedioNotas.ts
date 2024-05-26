import * as readlineSync from 'readline-sync';

let notas:number=0; 
let cantidadNotas:number=readlineSync.questionInt("\ncuantas notas quieres promediar? ")
let seguir:boolean=true;

for (let numero=1;numero<cantidadNotas+1;numero++){
    notas= notas + readlineSync.questionInt("\nIngrese su nota "+numero+": ");
}


console.log("El promedio de notas es:", notas/cantidadNotas);