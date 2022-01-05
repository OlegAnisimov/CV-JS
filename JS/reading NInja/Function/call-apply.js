function juggle() {
    let result = 0;
    for (let n = 0; n < arguments.length; n++) {
        result += arguments[n];
    }
    this.result = result;
}
let ninja1 = {};
let ninja2 = {};
juggle.apply(ninja1,[1,2,3,4]);
juggle.call(ninja2, 5,6,7,8);

console.log(ninja1.result)
console.log(ninja2.result)

