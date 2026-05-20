"use strict";

const p = document.querySelector("p");
const kirby = document.getElementById("Kirby");
const bulbasaur = document.getElementById("Bulbasaur"); 

p.addEventListener("click", cambia);

function cambia() {
    const isKirbyTop = kirby.style.zIndex === "5";
    kirby.style.zIndex = isKirbyTop ? "4" : "5";
    bulbasaur.style.zIndex = isKirbyTop ? "5" : "4";
}
