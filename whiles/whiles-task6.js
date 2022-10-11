var a = 3;
var b = 10;
var count = 0;
var p = 0;
for (var i = a; i <= b ; i++) {
    count += 1;
    p = count;
    while (p > 0) {
        p -= 1;
        console.log(i);
    }
}