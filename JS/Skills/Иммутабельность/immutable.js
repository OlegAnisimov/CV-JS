/*
* https://dev-gang.ru/article/vse-ob-immutabelnyh-massivah-i-obektah-v-javascript-ysrmqxebrb/
Вызов JSON.parse(JSON.stringify(obj)) делает глубокий клон объекта. Он преобразует объект в строковое представление,
* а затем анализирует его обратно в новый объект. Все ссылки с оригинального объекта остаются нетронутыми.
* /
*/




// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const state = {
    selected: 'apple',
    quantity: 13,
    fruits: ['orange', 'apple', 'lemon', 'banana']
};
const { quantity, ...newState } = state;

console.log(quantity);
console.log(newState);
/*
quantity = 13
newState = {
 selected: 'apple',
 fruits: ['orange', 'apple', 'lemon', 'banana']
}
*/
