"use strict"

function fattoriale (n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i
    }
    return fact;
}

const fattorialeArrow = n => n == 1 ? 1 : n * fattorialeArrow(n-1);

console.log(fattoriale(8));
console.log(fattorialeArrow(8));