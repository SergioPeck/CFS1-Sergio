//contador
let contador=0;

function contador_Sumar(){
    contador++;
    console.log(contador);
    document.getElementById("titulo-Contador").innerHTML=contador;
}
function contador_Restar(){
    contador--;
    console.log(contador);
    document.getElementById("titulo-Contador").innerHTML=contador;
}

//alerta titulo
function mostrar_Alerta(){
    alert("hiciste click");
}

//cambiar titulo
function cambiar_Tittle(){
    let titulo=document.getElementById("Titulo");
    titulo.innerHTML = "Titulo re cambiado bldo";
    titulo.classList.add("Titulo_Nuevo");
    document.body.style.backgroundColor= "black";
    console.log(titulo);
}


//boton alerta
document.getElementById("my-Button").addEventListener("click",mostrar_Alerta);

//contador
document.getElementById("titulo-Contador").innerHTML=contador;
document.getElementById("sumar-Contador").addEventListener("click",contador_Sumar);
document.getElementById("restar-Contador").addEventListener("click",contador_Restar);

//cambiar titulo
document.getElementById("btn-Tittle").addEventListener("click",cambiar_Tittle);
