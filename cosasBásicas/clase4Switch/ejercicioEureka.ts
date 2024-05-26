import * as readlineSync from'readline-sync';
let contrasena:string = ("eureka");
let intentos:number=0;
let insertarContrasena:string;

while(intentos<3){
    insertarContrasena = readlineSync.question("\nIngresar contrasena: ")

    if (insertarContrasena==contrasena){
        console.log("Correcto");
    }else{
        console.log("Contraseña equivocada, te quedan "+(2-intentos)+" oportunidades");
        intentos++;
    } 
}

console.log("\ncagaste pa, bloqueamos tu cuenta por boludo y encima te 'protegemos tu dinero' por tiempo indefinido\n")