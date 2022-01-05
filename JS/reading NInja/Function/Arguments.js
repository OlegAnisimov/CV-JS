function sumArguments() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){ // arguments - объект
        sum += arguments[i];
    }
    return sum;
}

console.log(sumArguments(1, 2, 3));

function sumRest(...rest) { // rest - массив
    let sum = 0;
    for (let i = 0; i < rest.length; i++) {
        sum += rest[i]
    }
    return sum;
}

console.log(sumRest(1, 2, 3));
