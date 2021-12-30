// https://daruse.ru/zadaniya-po-js-dlya-prokachki

let str = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ducimus in odit, omnis quae repellendus voluptatem voluptates. ' +
    'Ab aliquam ea enim eveniet facere illum ipsa maxime quasi sequi vel! ' +
    'Ipsum? GHgflsdngl... Fgyrt.'

// const separator = /[\d\.]/; // точка
const separator = /[A-Z]+[a-z]+/g;

const array = [...str.matchAll(separator)]


// console.log(array);
const result = [];
 array.forEach((workArray) => {
    workArray.forEach((item) => {
        result.push(item)
    })
})
// console.log(str.split(separator));
console.log(result)
