"use strict";

const p = document.querySelector("p");
p.addEventListener("click", avvia);
const numCasuale = (Math.floor(Math.random() * 5) + 1 )* 1000;

function avvia() {
    let kirby = document.querySelector("img");
    let timer = window.setTimeout(sposta, numCasuale);
}

function sposta() {
    let nuovo = document.querySelector("img");
    nuovo.style.left = 200 + "px";
}

