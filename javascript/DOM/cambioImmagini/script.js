"use strict";

function cambiaImmagine() {
    const img = document.querySelector("img")
    if(img.src.match("Bulbasaur.png")) {
        img.src = "img/Kirby.png";
    } else {
        img.src = "img/Bulbasaur.png";
    }
}