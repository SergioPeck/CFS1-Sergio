import * as rls from 'readline-sync';
import * as fs from 'fs';

let matriz: any[][] = [];

function cargar(){
    for (let i = 0; i < 3; i++) {
        let producto = rls.question(`Ingrese el nombre del producto ${i + 1}: `);
        let precio = 0;
        while (precio <= 0) {
            precio = rls.questionInt(`Ingrese el precio de ${producto}: `);
            if (precio <= 0) {
                console.log("El precio debe ser mayor que cero. Inténtelo de nuevo.");
            }
        matriz[i] = [producto, `$${precio}`];
        }
    }
}
cargar();
console.log("Matriz:");
console.log(matriz);

let matrizComoJSON = JSON.stringify(matriz);
fs.writeFileSync("lista.txt", matrizComoJSON);
