function multiple(a, b) {
    let result = 1;

    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            console.log(` Params not a number`);
            return;
        }
    }

    for (let i = 0; i < arguments.length; i++) {
        result *= arguments[i]
    }
    return result;
}


console.log(multiple(2, 5, 3, 0.5));
console.log(multiple(2, 5, 3, {}));
