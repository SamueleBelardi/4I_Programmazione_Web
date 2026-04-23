"use scrict";

function evidenziaIntroduzione() {
    let peccati = document.querySelectorAll("header em");

    for (let i = 0; i < peccati.length; i++) {
        peccati[i].style.color = "orange";
    }
}

function unoSiUnoNo() {
    let paragrafi = document.querySelectorAll("article p");

    for (let i = 0; i < paragrafi.length; i++) {
        if (i % 2 == 0) {
            paragrafi[i].style.backgroundColor = "grey";
        }
    }
}

function tatji() {
    console.log("zio pera");
    let tatji = document.querySelectorAll("em");

    for (let i = 0; i < tatji.length; i++) {
        if (tatji[i].textContent === "Tatji") {
            tatji[i].innerText = "lucertola rossa";
            tatji[i].style.color = "red";
        }

    }
}

function eliminaH2() {
    let daRimuovere = document.querySelector("h2");
    daRimuovere.remove();
}