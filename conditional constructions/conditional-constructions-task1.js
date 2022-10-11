var n = parseInt(prompt('Введіть ціле число'));
if (n > 0) {
    n += 1;
}

else if (n < 0) {
    n -= 2;
}

else {
    n = 10;
}

alert(n);