"use strict"
var digitN = function (k,n) {
    var array = Array.from(String(k));
    array.reverse(); // щоб цифри у числі нумерувалися справа на ліво
    if (array.length < n) {
        return -1;
    }
    return(+array[n - 1]);
}
console.log(digitN(12437,2));