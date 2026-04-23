"use strict"

function gradiInRadianti(angolo) {
    let sessadecimali = angolo.gradi + angolo.primi / 60 + angolo.secondi / 3600;
    let radianti = sessadecimali * Math.PI / 180;
    return radianti;
}

const angoli = [
    { gradi: 80, primi: 30, secondi: 23 },
    { gradi: 25, primi: 31, secondi: 24 }
]

const angoloUno = gradiInRadianti(angoli[0]);
const angoloDue = gradiInRadianti(angoli[1]);
alert(angoloUno)
alert(angoloDue)


