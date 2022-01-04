/*
* functions are objects which can invoke
* */

function f1() {
    return function f3() {

    }
}

function f2() {
}

let store = {
    nextId: 1,
    cache: {},
    add: function(fn) {
        if (!fn.id) {
            fn.id = this.nextId++;
            this.cache[fn.id] = fn;
            return true;
        }
    }
};

// console.log(store)
// console.log(f1.id)
// store.add(f1)
// console.log(f1.id)
// store.add(f1())
// console.log(store)
// store.add(f2)
// console.log(store)
// store.add(f2)
// console.log(store)

function isPrime(value){
    if (!isPrime.answers){
        isPrime.answers = {};
    }
    if (isPrime.answers[value] !== undefined) {
        return isPrime.answers[value];
    }
    let prime = value !== 1; // 1 is not a prime
    for (let i = 2; i < value; i++) {
        if (value % i === 0) {
            prime = false;
            break;
        }
    }
    return isPrime.answers[value] = prime;
}

isPrime(5)
isPrime(4)
isPrime(3)
console.log(isPrime.answers)


