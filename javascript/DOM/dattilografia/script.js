"use strict";
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
  setInterval(cambiaTasto, 3000);
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
