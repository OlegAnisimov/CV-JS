function getSamurai(samurai) {
    "use strict"
    arguments[0] = "Ishida";
    return samurai;
}

function getNinja(ninja) {
    arguments[0] = "Fuma";
    return ninja;
}

let samurai = getSamurai("Toyotomi");
let ninja = getNinja("Yoshi");

// console.log(samurai)
// console.log(ninja)


// let ninja1 = {
//     whoAmI: function(){
//         return this;
//     }
// };
// let ninja2 = {
//     whoAmI: ninja1.whoAmI
// };
//
// let identify = ninja2.whoAmI;

// console.log(ninja1.whoAmI() === ninja1)
// console.log(ninja2.whoAmI() === ninja1)
// console.log(identify() === ninja1)
// console.log(ninja1.whoAmI.call(ninja2) === ninja2)

// function Ninja(){
//     this.whoAmI = () => this;
// }
// let ninja3 = new Ninja();
// let ninja4 = {
//     whoAmI: ninja3.whoAmI
// };
//
// console.log(ninja3.whoAmI() === ninja3)
// console.log(ninja4.whoAmI() === ninja4)


function Ninja() {
    this.whoAmI = function () {
        return this;
    }.bind(this);
}

let ninja1 = new Ninja();
let ninja2 = {
    whoAmI: ninja1.whoAmI
};

console.log(ninja1.whoAmI() === ninja1);
console.log(ninja2.whoAmI() === ninja2);
