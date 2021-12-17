function multiple(a, b) {
    (typeof  a !== 'number' || typeof b !== 'number') ? console.log(`a & b must be numbers`) : privateMultiple(a, b);

    // if (typeof  a !== 'number' || typeof b !== 'number') {
    //     console.log(`a & b must be numbers`)
    //     return;
    // } else {
    //     console.log(a * b);
    //     return a * b;
    // }
    // console.log(arguments.length);
    // console.log(typeof arguments);
    function privateMultiple() {
        for (let i = 0; i < arguments.length; i++) {
            let result = arguments[i]*=arguments[i + 1];
            console.log(result);
            return arguments[i]*=arguments[i + 1];
        }
    }
}

// multiple({});
multiple(10, 4);
