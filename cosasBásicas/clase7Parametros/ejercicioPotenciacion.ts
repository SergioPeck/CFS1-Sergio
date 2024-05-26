import * as readlineSync from "readline-sync"

let base:number=readlineSync.questionInt("Ingrese la base: ");
let exponente:number=readlineSync.questionInt("ingrese el exponente: ");
let resultado:number=0;
if (exponente>=0){
    if (exponente==0){
        resultado=1;
    } else if(exponente>0){
        resultado=base**exponente;
    }
    else{
        resultado=1;
    }
}
console.log("Tu resultado es: "+resultado);