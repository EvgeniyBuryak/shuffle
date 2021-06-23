let arr = [1, 2, 3];

console.log(shuffle(arr));
// arr = [3, 2, 1]

console.log(shuffle(arr));
// arr = [2, 1, 3]

console.log(shuffle(arr));
// arr = [3, 1, 2]

function shuffle(arr) {
    //console.log(rand.toFixed(1));
    return arr.sort( () =>
        //(Math.random(arr).toFixed(1) >= 0.5) ? 1 : -1
        randomInteger(1, 4) > 2 ? 1 : -1
    );
}

function randomInteger(min, max) {
    // случайное число от min до (max+1)

    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

console.log(Math.random().toFixed(1));
console.log(randomInteger(1, 3));