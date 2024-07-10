let btn=document.getElementById("agregar-tarea").addEventListener("click",function(e){
    let tarea=document.getElementById("input-texto")    //traigo el input
    let lista_items=document.createElement("li")        //creo un li
    let nueva_tarea=document.createElement("p")         //creo un p

    if (!tarea.value){                                  //verifico que el input no esté vacio
        alert("Escriba una tarea primero")
        console.log("Fallo al intentar crear una nueva tarea")  //mensaje de error por consola
    } else{
        nueva_tarea.textContent=tarea.value                 //le asigno el valor del input al p

        lista_items.appendChild(nueva_tarea)                //le agrego el p al li
        let lista_tareas=document.getElementsByClassName("lista-tareas")[0]        //traigo el div donde se pondra el li y lo incio en 0
        lista_tareas.appendChild(lista_items)               //le agrego el li al div

        console.log("Se agrego una nueva tarea a la lista de tareas")       //agrego un mensaje para imprimir por consola
        tarea.placeholder="Agregar otra tarea"              //cambio el placeholder
        tarea.value=""                                      //vacio el input
    }
})

