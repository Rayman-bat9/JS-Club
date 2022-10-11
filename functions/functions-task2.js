"use strict"
var min = function () {
    var res = Infinity;
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] < res) {
            res = arguments[i]
        }
    }
    console.log(res)
}
min(2,3,4,45,1,-10231);