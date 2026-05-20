"use strict";

window.onload = aggiungiAlberi;

function aggiungiAlberi() {

    const oggetti = [
        {
            nome: "img/albero1.png",
            index: 1
        },
        {
            nome: "img/arbusto1.png",
            index: 5
        },
        {
            nome: "img/erba.png",
            index: 10
        }
    ];

    for (let i = 0; i < 10; i++) {
        let nuovo = document.createElement("img");
        let indiceCasuale = Math.floor(Math.random() * oggetti.length);
        nuovo.src = oggetti[indiceCasuale].nome;
        let posizioneX = Math.random() * (window.innerWidth - 50);
        nuovo.style.left = posizioneX + "px";
        nuovo.style.zIndex = oggetti[indiceCasuale].index
        document.body.appendChild(nuovo);
    }
}
