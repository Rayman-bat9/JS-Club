"use strict"
var calculator = {
    read: function () {
        this.a = +prompt("Введіть чилсло a");
        this.b = +prompt("Введіть число b");
    },
    sum: function () {
        return this.a + this.b;
    },
    mul: function () {
        return this.a * this.b;
    }
};
 calculator.read();
 console.log(calculator.sum());
 console.log(calculator.mul());