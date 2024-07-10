// function bang(){
//     alert("has explotado");
    
// }

// let timer = setTimeout(bang,3000);

// let timer_interval= setInterval(bang,1000);
// //contador
// let segundos=0;
// function segundero(){
//     let contador=document.getElementById("contador");
//     segundos++;
//     contador.innerHTML=segundos
// }
// let timer=setInterval(segundero,1000);
// //btn parar
// let btn_parar=document.getElementById("parar");
// btn_parar.addEventListener("click",function(e){clearInterval(timer)});

//más rápido
let numero = 0;
let randomizador;

function numero_random() {
    let input_numero = document.getElementById("numero").value; // Obtener el valor del input
    let numero_objetivo = parseFloat(input_numero); // Convertir el valor del input a un número
    let numero_random = document.getElementById("random");
    numero++;
    numero_random.innerHTML = numero;
    if (numero === numero_objetivo) {
        numero = 0;
    }
}

//empezar
let btn_start = document.getElementById("empezar").addEventListener("click", empieza);
function empieza() {
    randomizador = setInterval(numero_random, 1);
}

// btn para
let btn_parar_random = document.getElementById("seleccionar-random");
btn_parar_random.addEventListener("click", function(e) {
    clearInterval(randomizador);
});

// restart
function restart() {
    numero = 0;
    let nummero_random = document.getElementById("random");
    nummero_random.innerHTML = numero;
}

let btn_restart = document.getElementById("restart").addEventListener("click", restart);
