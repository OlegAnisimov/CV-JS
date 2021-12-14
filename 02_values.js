// переменные прмитивы немутабельны
// let a = 42;
// let b = a;
// b++;
// console.log(`a is ${a}`);
// console.log(`b is ${b}`);


//====
let a = [1, 2, 3];
let b = a; // здесь хранится ссылка на пременную a
// чтобы обойти
// let b = a.concat();
b.push(4);

let c = [1, 2, 3, 4];

console.log(`a is ${a}`);
console.log(`b is ${b}`);

console.log(a === b); //true
console.log(a === c); //false
