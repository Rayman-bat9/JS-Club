var array = [1,1,1,2];

if (array[0] != array[1]) {
    if (array[0] != array[2]) {
        alert('Порядковий номер: 1');
    }
    else if (array[1] != array[2]) {
        alert('Порядковий номер: 2');
    }
}

else if (array[1] != array[2]) {
    if (array[1] != array[3]) {
        alert('Порядковий номер: 2');
    }
    else if (array[2] != array[3]) {
        alert('Порядковий номер: 3');
    }
}

else {
    alert('Порядковий номер: 4');
}