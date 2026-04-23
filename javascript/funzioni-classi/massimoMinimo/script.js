"use strict"

const v = [];
for (let i = 0; i < 20; i++) {
    v.push(Math.floor(Math.random() * 1001));
}

function max(v) {
    return v.reduce((max, n) => max > n ? max : n);
}
function min(v) {
    return v.reduce((min, n) => min < n ? min : n);
}
function media(v) {
    return v.reduce((sum, n) => sum += n, 0) / v.length;
}

console.log(v);
console.log(`Massimo: ${max(v)}`);
console.log(`Minimo: ${min(v)}`);
console.log(`Media: ${media(v)}`)