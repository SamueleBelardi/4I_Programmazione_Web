const astronave = document.querySelector("img");
let direzione = "su";

const astronaveWidth = 100;
const astronaveHeight = 128;

let xAstronave = (window.innerWidth / 2) - (astronaveWidth / 2);
let yAstronave = (window.innerHeight / 2) - (astronaveHeight / 2);

astronave.style.position = "absolute";
astronave.style.left = xAstronave + "px";
astronave.style.top = yAstronave + "px";

function generaAsteroidi(quantita) {
    for (let i = 0; i < quantita; i++) {
        const asteroide = document.createElement("img");
        asteroide.src = "img/asteroide.gif";
        asteroide.className = "asteroide";
        asteroide.style.position = "absolute";
        
        const xRandom = Math.random() * (window.innerWidth - 100);
        const yRandom = Math.random() * (window.innerHeight - 100);
        
        asteroide.style.left = xRandom + "px";
        asteroide.style.top = yRandom + "px";
        
        document.body.appendChild(asteroide);
    }
}

generaAsteroidi(5);

function keyEvent(e) {
    const passo = 32;
    
    if (e.key === "w") {
        yAstronave -= passo;
        direzione = "su";
        astronave.style.transform = "rotate(0deg)";
    }
    if (e.key === "s") {
        yAstronave += passo;
        direzione = "giu";
        astronave.style.transform = "rotate(180deg)";
    }
    if (e.key === "a") {
        xAstronave -= passo;
        direzione = "sinistra";
        astronave.style.transform = "rotate(270deg)";
    }
    if (e.key === "d") {
        xAstronave += passo;
        direzione = "destra";
        astronave.style.transform = "rotate(90deg)";
    }

    const posizioniProtette = controlloBordi(xAstronave, yAstronave, astronaveWidth, astronaveHeight);
    xAstronave = posizioniProtette.x;
    yAstronave = posizioniProtette.y;

    astronave.style.top = yAstronave + "px";
    astronave.style.left = xAstronave + "px";

    if (e.key === ' ') {
        const missile = document.createElement("img");
        missile.src = "img/missile.png";
        missile.style.position = "absolute";
        
        let xMissile = xAstronave + (astronaveWidth / 2) - 10;
        let yMissile = yAstronave + (astronaveHeight / 2) - 10;
        let direzioneMissile = direzione;

        switch (direzione) {
            case "su":
                missile.style.transform = "rotate(0deg)";
                break;
            case "giu":
                missile.style.transform = "rotate(180deg)";
                break;
            case "destra":
                missile.style.transform = "rotate(90deg)";
                break;
            case "sinistra":
                missile.style.transform = "rotate(270deg)";
                break;
        }

        document.body.appendChild(missile);
        missile.style.top = yMissile + "px";
        missile.style.left = xMissile + "px";

        const intervallo = setInterval(() => {
            if (direzioneMissile === "su") yMissile -= 10;
            if (direzioneMissile === "giu") yMissile += 10;
            if (direzioneMissile === "sinistra") xMissile -= 10;
            if (direzioneMissile === "destra") xMissile += 10;

            missile.style.top = yMissile + "px";
            missile.style.left = xMissile + "px";

            if (xMissile < 0 || xMissile > window.innerWidth || yMissile < 0 || yMissile > window.innerHeight) {
                missile.remove();
                clearInterval(intervallo);
            }

            const asteroidi = document.querySelectorAll(".asteroide");
            asteroidi.forEach(asteroide => {
                if (collisioni(asteroide, missile)) {
                    asteroide.remove();
                    missile.remove();
                    clearInterval(intervallo);
                }
            });
        }, 20);
    }
}

function collisioni(img1, img2) {
    let r1 = img1.getBoundingClientRect();
    let r2 = img2.getBoundingClientRect();
    return !(r1.right < r2.left || 
             r1.left > r2.right || 
             r1.top > r2.bottom || 
             r1.bottom < r2.top);
}

function controlloBordi(x, y, width, height) {
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    const limiteDestro = window.innerWidth - width;
    if (x > limiteDestro) x = limiteDestro;
    const limiteInferiore = window.innerHeight - height;
    if (y > limiteInferiore) y = limiteInferiore;
    return { x: x, y: y };
}

window.addEventListener('keydown', keyEvent);
