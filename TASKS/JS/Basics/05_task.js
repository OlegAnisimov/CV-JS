// https://daruse.ru/zadaniya-po-js-dlya-prokachki

let str  = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ducimus in odit, omnis quae repellendus voluptatem voluptates. Ab aliquam ea enim eveniet facere illum ipsa maxime quasi sequi vel! Ipsum.'

function f(str) {

}
let regExp = /'.'/;
let regExp1 = /\{Lt}/g;

console.log(f(str.matchAll(/\p{Lt}/gu)));
// console.log(str.split('.'))
// console.log(str.split(regExp))
