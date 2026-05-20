"use strict";

let frame = 0;
let timer;
const frameWidth = 233; 
const totalFrames = 6; 

function caricaImmagine() {
    const png = document.getElementById("frame1");
    
    timer = window.setInterval(animazione, 100);
}

function animazione() {
    frame++;

    if (frame >= totalFrames) {
        frame = 0;
    }

    const posizioneX = -(frame * frameWidth);
    png.style.backgroundPosition = posizioneX + "px 0px";
}