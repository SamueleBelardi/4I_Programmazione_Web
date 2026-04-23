"use strict"

const calcolatrice = {
    cifre: 8,
    nome: "Samuele",
    somma: (n1, n2 = 0) => n1 + n2,
    sottrazione: (n1, n2 = 0) => n1 - n2,
    moltiplicazione: (n1, n2 = 1) => n1 * n2,
    divisione: (n1, n2 = 1) => n1 / n2,
} 

console.log(calcolatrice.cifre)
console.log(calcolatrice.moltiplicazione(4, 10))

calcolatrice.opposto = n => -n
console.log(calcolatrice.opposto(2))
