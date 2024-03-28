import * as readlineSync from 'readline-sync';

let cantidad:number=readlineSync.questionInt("Ingrese la cantidad de numeros que quiere ingresar: ");
let positivosNeutralesNegativos:number [] = new Array(cantidad);
positivosNeutralesNegativos[0]=0;   //positivo
positivosNeutralesNegativos[1]=0;   //neutro
positivosNeutralesNegativos[2]=0;   //negativo

for(let i:number=1;i<cantidad+1;i++){
    let n:number=readlineSync.questionInt(`Ingrese su numero ${i}: `);
    if (n<0){positivosNeutralesNegativos[0]++}
    else if(n===0){positivosNeutralesNegativos[1]++}
    else{positivosNeutralesNegativos[2]++}
}

console.log(`Usted ha ingresado ${positivosNeutralesNegativos[0]} numeros postivos, ${positivosNeutralesNegativos[1]} numeros neutros y ${positivosNeutralesNegativos[2]} numeros negativos`);