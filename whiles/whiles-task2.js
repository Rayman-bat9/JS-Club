var n = 124524;
var p = 0;
while (n >= 1) {
    p = n % 10;
    console.log(p);
    n = Math.trunc(n / 10);
}
