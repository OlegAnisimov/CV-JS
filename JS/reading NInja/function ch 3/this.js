/*
* неявный параметр this опеределяет контекст вызова функции
* существует 4 вида вызова функции
* 1. как функции с использованием ()
* 2. как метода объекта. obj.func()
* 3. как конструктора с использованием new
* 4. с помощью методов call, apply, bind
*
*
* */

// 1. как функции с использованием ()
function whatThis() {
    // 'use strict' // undefined
    return this
}

let varFunction = whatThis
// console.log(whatThis());
// console.log(varFunction());

let obj1 = {
    prop: 1,
    whatThis: varFunction
}
let obj2 = {
    prop: 2,
    whatThis: whatThis
}
let obj3 = {
    prop: 3,
    whatThis: varFunction
}

// console.log(obj1.whatThis());
// console.log(obj2.whatThis());
// console.log(obj3.whatThis());


/*
* If the constructor returns an object, that object is returned as the value of the
whole new expression, and the newly constructed object passed as this to the
constructor is discarded.
■ If, however, a nonobject is returned from the constructor, the returned value is
ignored, and the newly created object is returned.*/
var puppet = {
    rules: false
};
function Emperor() { // если конструктор возвращает объект, то при исп-ие слова new возвращатеся этот же объект
    this.rules = true;
    return puppet;
}
var emperor = new Emperor();

console.log(emperor.rules);
console.log(puppet.rules);
console.log((puppet === emperor));
