let Lista_dnis = document.getElementById("lista-dnis");
let recargar = document.getElementById("recargar");
const personas = [
    {
        nombre: "Alberto",
        apellido: "García",
        direccion: "Calle Falsa 123, Ciudad Ficticia",
        edad: 30,
        dni: "12345678A"
    },
    {
        nombre: "Lautaro",
        apellido: "Fernández",
        direccion: "Avenida Siempreviva 742, Ciudad Inventada",
        edad: 25,
        dni: "23456789B"
    },
    {
        nombre: "Tyron",
        apellido: "Martínez",
        direccion: "Plaza Imaginaria 10, Pueblo Irreal",
        edad: 35,
        dni: "34567890C"
    },
    {
        nombre: "Morena",
        apellido: "López",
        direccion: "Calle Sin Nombre 456, Villa Fantasía",
        edad: 28,
        dni: "45678901D"
    },
    {
        nombre: "Sol",
        apellido: "Gómez",
        direccion: "Avenida Invisible 789, Ciudad Ilusión",
        edad: 22,
        dni: "56789012E"
    }
];

function agregar_persona (personas){
    let div_padre = document.createElement("div");
    div_padre.classList.add("div_padre");
    div_padre.style.minWidth="30vw";
    div_padre.style.padding="10px";
    div_padre.style.backgroundColor="#dedede"
    div_padre.style.borderRadius="8px"
    div_padre.style.margin="5px"

    let deshabilitar = document.createElement("img");
    deshabilitar.src = "imgs/ojo-cerrado.png"
    deshabilitar.classList.add("hover-ojo")
    deshabilitar.style.marginLeft="95%";
    deshabilitar.style.cursor="pointer";
    deshabilitar.addEventListener("click", function(e){
        Lista_dnis.removeChild(div_padre);
    })

    let titulo = document.createElement("h3");
    titulo.innerHTML=`${personas.nombre} ${personas.apellido}`;

    let direccion = document.createElement("p");
    direccion.innerHTML=`Dirección: ${personas.direccion}`;

    let edad = document.createElement("p");
    edad.innerHTML=`Edad: ${personas.edad}`;

    let dni = document.createElement("p");
    dni.innerHTML= `DNI: ${personas.dni}`;

    div_padre.appendChild(deshabilitar);
    div_padre.appendChild(titulo);
    div_padre.appendChild(direccion);
    div_padre.appendChild(edad);
    div_padre.appendChild(dni);
    Lista_dnis.appendChild(div_padre)
}
function cargar(){
    for (let i=0;i<personas.length; i++){
        agregar_persona(personas[i]);
    }
}
cargar();

recargar.addEventListener("click", function(e){
        while (Lista_dnis.firstChild){
            Lista_dnis.removeChild(Lista_dnis.firstChild);
        }
        cargar();
})