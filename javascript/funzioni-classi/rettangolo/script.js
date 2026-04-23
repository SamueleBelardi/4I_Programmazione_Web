"use strict"

class Rettangolo {

    constructor (base, altezza) {
        this.base = base;
        this.altezza = altezza; 
    }

    perimetro () {
        return (this.base * 2) + (this.altezza * 2);
    }

    area() {
        return this.base * this.altezza;
    }
}

const prova = new Rettangolo(2,2);
const perimetro = prova.perimetro;
const area = prova.area;
console.log(`Rettangolo: ${prova}`);
console.log(`Tipo: ${typeof(prova)}`);
console.log(`Perimetro: ${prova.perimetro()}`);
console.log(`Area: ${prova.area()}`);