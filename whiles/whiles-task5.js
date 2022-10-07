var num = 0;
var array = [];
var sum = 0;

do {
    num = parseInt(prompt('Введіть число'));
    array.push(num);
}
while(num)

array.pop();

for (var i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);