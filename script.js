let arr = [1, 2, 3];

console.log(shuffle(arr));
// arr = [3, 2, 1]

console.log(shuffle(arr));
// arr = [2, 1, 3]

console.log(shuffle(arr));
// arr = [3, 1, 2]

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }
    return arr;
}

/*function randomInteger(min, max) {
    // случайное число от min до (max+1)

    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}*/

/*
 * подсчёт вероятности для всех возможных вариантов
 *
 *
   let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
};

for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
}

// показать количество всех возможных вариантов
for (let key in count) {
    alert(`${key}: ${count[key]}`);
}

*/