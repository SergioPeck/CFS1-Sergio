function dibujarXGuiones(cantidad:number): void {
    let linea: string = "-";
    for (let i: number = 0; i < cantidad; i++) {
        linea += "-";
    }
    console.log(linea);
}
dibujarXGuiones(90);
console.log("sos pelotudisimo");
dibujarXGuiones(13);