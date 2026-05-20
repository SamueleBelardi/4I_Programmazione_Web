"use strict";

const img = document.querySelector("img");
img.addEventListener("click", click);

const h1 = document.querySelector("h1");
let contatore = 0;
h1.innerText = contatore

let livello = 1;

function gioco() {
    let timer = window.setInterval(spostamento, livello * 1000);
}

function spostamento() {
    const randomX = Math.random() * (window.innerWidth - 50);
    const randomY = Math.random() * (window.innerHeight - 50);
    img.style.position = "absolute";
    img.style.left = randomX + "px";
    img.style.top = randomY + "px";
}

function click() {
    const sound = document.createElement("audio")
    sound.src = "src/spiderman-meme-song.mp3"
    sound.play();
    contatore++;
    h1.innerText = contatore;
    if (contatore % 5 === 0) {
        livello += 1;
        console.log(livello)
    }
}
