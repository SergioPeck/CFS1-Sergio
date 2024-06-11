let btn = document.getElementById("enviar")
let input_email=document.getElementById("input-Correo")
let input_consulta=document.getElementById("input-Consulta")

btn.addEventListener("click",function(e){
        verificarFormulario(input_email,input_consulta)
})

function verificarFormulario(email,consulta){
    if(!emailValido(email.value)){
        alert("Ingrese correo válido")
    }else{
        alert("Su consulta fue enviada correctamente")
        console.log(consulta)
    }
}

function emailValido(emailIngresado){
    console.log(emailIngresado);
    let re=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    return re.test(emailIngresado)
}


let items=document.querySelectorAll(".elementosDeLista")
// console.log(items)
// console.log(items[1].textContent)

let arregloDeDivs=document.querySelectorAll("div")
// console.log(arregloDeDivs)


let padre=document.getElementById("padre")

let hijos=padre.children
console.log(hijos)
let pimerHijo=padre.firstChild
console.log(primerHijo)


let nuevoDiv=document.createElement("div")
nuevoDiv.textContent="este es un nuevo div"
nuevoDiv.classList.add("nuevoDiv")

let body=document.getElementById("body")
body.appendChild(nuevoDiv)