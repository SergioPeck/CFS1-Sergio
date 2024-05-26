let matriz:number[][] = new Array(5);
matriz[0]=new Array(5);
matriz[1]=new Array(5);
matriz[2]=new Array(5);
matriz[3]=new Array(5);
matriz[4]=new Array(5);

for (let i:number=0;i<matriz.length;i++){
    for (let j:number=0;j<matriz.length;j++){
        matriz[i][j]=0;
    }
}
for (let i:number=0;i<matriz.length;i++){
    let fila:string="";

    for (let j:number=0;j<matriz.length;j++){
        fila+= ""+matriz[i][j];
    }
    console.log(fila);
}