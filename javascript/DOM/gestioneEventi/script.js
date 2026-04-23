"use strcit";

let mouse = document.querySelector("p");
mouse.addEventListener("mouseover", passaSopra)
mouse.addEventListener("mouseout", esci)

function passaSopra(){
    let bersaglio = document.getElementById("cambiaColore")
	bersaglio.style.backgroundColor="red";
}
function esci(){
    let bersaglio = document.getElementById("cambiaColore")
	bersaglio.style.backgroundColor="yellow";
}

let primo = document.getElementById("primo");
let secondo = document.getElementById("secondo");
let scambia = document.getElementById("scambia");
scambia.addEventListener("click", scambiaParagrafi);

function scambiaParagrafi() {
    let a = primo.innerText;
    primo.innerText = secondo.innerText;
    secondo.innerText = a;
}

let click = document.getElementById("contatore");
let contatore = 0
click.addEventListener("click", aumenta);

function aumenta() {
    contatore++;
    click.innerText += contatore
}

