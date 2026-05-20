"use strict";

let contatore = 0;
const p = document.getElementById("contatore"); 
p.innerText = "Punti: " + contatore;

const sposta = document.getElementById("spostaGiu");
sposta.addEventListener("click", spostaGiu)

function immagineSchermo() {
    let randomX = Math.random() * (window.innerWidth - 50);
    let randomY = Math.random() * (window.innerHeight - 50);
    
    let nuovo = document.createElement("img");
    nuovo.src = "Bulbasaur.png";
    nuovo.style.position = "absolute"; 
    nuovo.style.left = randomX + "px";
    nuovo.style.top = randomY + "px";
    
    nuovo.addEventListener("click", elimina);
    document.body.appendChild(nuovo);
}

function elimina(evento) {
    evento.target.remove();
    contatore++; 
    p.innerText = "Punti: " + contatore;
}

function spostaGiu() {
    const immagini = document.querySelectorAll("img");
    
    immagini.forEach(img => {
        let topAttuale = parseInt(img.style.top) || 0;
        img.style.top = (topAttuale + 50) + "px";
    });
}

