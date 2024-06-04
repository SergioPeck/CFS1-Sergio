//evento de hacer click y aparece una alerta
function alertaClick(){
    alert("hiciste click")
}

let eventFocus = document.getElementById("div1")
eventFocus.addEventListener("click",alertaClick)


//Evento de agarrar y soltar un parrafo
function desaparecer(){
    agarralo.style.display=`none`
}
function aparecer(){
    agarralo.style.display=`block`
}

let agarralo = document.getElementById("div2")
agarralo.addEventListener("drag",desaparecer)
agarralo.addEventListener("dragend",aparecer)


//Evento de copiar un texto que desaparece
function copiando(){
    apretar.style.display=`none`
}

let apretar = document.getElementById("div3")
apretar.addEventListener("copy",copiando)