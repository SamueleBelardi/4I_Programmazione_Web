"use strict";

function testaCollisione(id1, id2) {
  let img1 = document.getElementById(id1);
  let img2 = document.getElementById(id2);

  let r1 = img1.getBoundingClientRect();
  let r2 = img2.getBoundingClientRect();
  return !(
    r1.right < r2.left
    ||r1.left > r2.right
    ||r1.top > r1.bottom
    ||r1.bottom < r1.top
  );
}

if (testaCollisione("albero", "kirby")) {
  console.log("preso");
} else {
  console.log("no");
}
