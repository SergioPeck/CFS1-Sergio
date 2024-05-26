import * as readlineSync from "readline-sync";

let funcionamiento:boolean=false;
let numerito:number=readlineSync.questionInt("\nIngrese su numerito: ");
let numeroMaximo:number=numerito;

while (numerito !=0){
    funcionamiento=true;
    if (numerito>numeroMaximo){
        numeroMaximo=numerito;
    }
    else{
     numerito=readlineSync.questionInt("Ingrese otro numerito pls: ")
}
}
if (funcionamiento){
    console.log("Su numero maximo es:", numeroMaximo);
}