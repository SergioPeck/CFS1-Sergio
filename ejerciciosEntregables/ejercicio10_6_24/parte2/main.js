//header
let header=document.createElement("header");
header.classList.add("header");
let header_p=document.createElement("p");
header_p.textContent="Header";
//uniones
let container=document.getElementById("container");
header.appendChild(header_p);
container.appendChild(header);

//cuerpo
//main
let main=document.createElement("main");
main.classList.add("main");
//div1
let div1=document.createElement("div");
div1.classList.add("div");
let  div1_p=document.createElement("p");
div1_p.textContent="div1";
div1.appendChild(div1_p)                            
main.appendChild(div1)
container.appendChild(main)
//div2
let div2=document.createElement("div");
div2.classList.add("div");
let  div2_p=document.createElement("p");
div2_p.textContent="div2";
div2.appendChild(div2_p)
main.appendChild(div2)

//footer
let footer=document.createElement("footer");
footer.classList.add("footer");
let footer_p=document.createElement("p");
footer_p.textContent="Footer";
//uniones
footer.appendChild(footer_p);
container.appendChild(footer);