"use strict"

const paragrafo = document.querySelector("p")

function aggiungi() {
    paragrafo.classList.add("evidenziato")
}

function rimuovi() {
    paragrafo.classList.remove("evidenziato")
}

function alterna() {
    paragrafo.classList.toggle("bordo");
}

const paragrafi = document.querySelectorAll("p")
paragrafi.forEach((p) => p.addEventListener("click", attivo => p.classList.toggle("attivo")))

