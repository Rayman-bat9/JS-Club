"use strict"
var sum = 0;
function digitN (k) {
    if (k > 1) {
        sum = sum + k % 10;
        digitN(Math.trunc(k * 0.1));
    }
    else {
        console.log(sum);
    }
}

digitN(321321);