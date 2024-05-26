import * as readlineSync from "readline-sync"

let Numerito:number=readlineSync.questionInt("\nQue numero de mes quieres? ")
let NumeroMeses:string[] = new Array(13);

NumeroMeses[0]="Enero";
NumeroMeses[1]="febrero";
NumeroMeses[2]="marzo";
NumeroMeses[3]="Abril";
NumeroMeses[4]="Mayo";
NumeroMeses[5]="Junio";
NumeroMeses[6]="Julio";
NumeroMeses[7]="Agosto";
NumeroMeses[8]="Septiembre";
NumeroMeses[9]="Octubre";
NumeroMeses[10]="Noviembre";
NumeroMeses[11]="Diciembre";

let indice:number=Numerito-1;
console.log(NumeroMeses[indice]+`\n`);