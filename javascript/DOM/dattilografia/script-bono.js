"use strict";
let dimensioniBarra = 100;
let contatore = 0;
const sezionePunti = document.getElementById("punti");
sezionePunti.innerText = contatore;
let tastoAcceso = undefined;

function creaPagina() {
    const alfabeto = "abcdefghijklmnopqrstuvwxyz";
    const padre = document.getElementById("plancia");
    alfabeto.split("").forEach(lettera => {
        const nuovo = document.createElement("span");
        nuovo.innerText = lettera;
        padre.appendChild(nuovo);
    });
    cambiaTasto();
    setInterval(cambiaTasto, 3000);
    setInterval(barraCaricamento, 100);
    document.addEventListener("keydown", aumentaPunteggio);
}

function cambiaTasto() {
    const tasti = document.querySelectorAll("#plancia span");
    if (tastoAcceso != undefined) {
        tastoAcceso.classList.remove("colorato");
    }
    const numero = Math.floor(Math.random() * 26);
    let scelto = tasti[numero];
    scelto.classList.add("colorato");
    tastoAcceso = scelto;
}

function aumentaPunteggio(e) {
    if (tastoAcceso != undefined) {
        const accesso = tastoAcceso.innerText;
        if (e.key === accesso) {
            contatore++;
            sezionePunti.innerText = contatore;
        }
    }
}

function barraCaricamento() {
    const barra = document.getElementById("barra-caricamento");

    if (dimensioniBarra === 0) {
        dimensioniBarra = 100;
    }
    dimensioniBarra -= 1;

    barra.style.width = dimensioniBarra + "%"
}