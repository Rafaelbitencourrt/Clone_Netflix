"use strict";

/* function log(value) {
  console.log(value);
}

log("teste");
 */

var sumOld = function (a, b) {
  return a + b;
};

console.log(sumOld(5, 5));

////arrow functions

var sum = (a, b) => a + b;

console.log(sum(5, 5));
