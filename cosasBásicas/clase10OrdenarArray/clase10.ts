let num:number[] = new Array(7);

function cargar(num:number[]){
    for(let i:number=0;i<num.length;i++){
        num[i] = Math.floor((Math.random()*10));
    }
}

function mostrar(num:number[]){
    console.log("--- ARREGLO --")
    for(let i:number=0;i<num.length;i++){
        console.log(num[i]);
    }
}

function burbuja(num:number[]){
    let ordenado:boolean = false;
   
    while(!ordenado){
        console.log("Ordenando");
        ordenado = true;
        for(let i:number=0;i<num.length-1;i++){
            if(num[i] > num[i+1]){
                let aux:number = num[i];
                num[i] = num[i+1]
                num[i+1] = aux;
                ordenado=false;
            }
        }
    }
}


function seleccion(num:number[]){

    let tam:number = num.length
    for(let i:number=0; i<num.length -1; i++){
        console.log("---i:"+i)

        //let index_menor:number = num[i];// error que teniamos en clase, no guardabamos el index sino el valor.
        let index_menor:number = i;

        for(let j:number = i+1 ; j < num.length; j++){
            console.log("j:"+j)
            if(num[index_menor] > num[j]){
                index_menor = j;
            }
        } 
        
        if(index_menor !== i){

            let aux:number = num[i];
            num[i]=num[index_menor];
            num[index_menor] = aux;


        }

    }  

}

cargar(num);
console.log("Arreglo Desordenado");
mostrar(num);

seleccion(num);
// burbuja(num);
console.log("Arreglo Ordenado");
mostrar(num);