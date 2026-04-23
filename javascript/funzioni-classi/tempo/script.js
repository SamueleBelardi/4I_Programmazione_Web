"use strict"

function oreMinutiSecondi(sec){
   let s, m, o;

   m = Math.floor(sec/60);
   s = sec % 60;
   
   o = Math.floor(m/60);
   m = m % 60;

   return {ore:o, minuti:m, secondi:s};
}

// creiamo varibiale dei secondi
let secondiUno = 65
let secondiDue = 40065

// creaiamo oggetti partendo da una variabile
const tempoUno = oreMinutiSecondi(secondiUno)
const tempoDue = oreMinutiSecondi(secondiDue)

// stampiamo sulla console
console.log(`Secondi: ${tempoUno.secondi} \n Minuti: ${tempoUno.minuti} \n Ore: ${tempoUno.ore}`)
console.log(`Secondi: ${tempoDue.secondi} \n Minuti: ${tempoDue.minuti} \n Ore: ${tempoDue.ore}`)


