"use strict"

class Triangolo {

    constructor(lato1, lato2 = lato1, lato3 = lato2) {
        this.lato1 = this.lato1;
        this.lato2 = this.lato2;
        this.lato3 = this.lato3;
    }

    toString() {
        return `Triangolo ${this.lato1} ${this.lato2} ${this.lato3}`;
    }

    perimetro() {
        return this.lato1 + this.lato2 + this.lato3;
    }

    isRettangolo() {
        const [cateto1, cateto2, ipotenusa] = [this.lato1, this.lato2, this.lato3].sort((a, b) => a - b);
        return (cateto1 ** 2 + cateto2 ** 2) === (ipotenusa ** 2);
    }
}

const triangolo = new Triangolo(3,4,5);

console.log(triangolo);
console.log(triangolo.isRettangolo());