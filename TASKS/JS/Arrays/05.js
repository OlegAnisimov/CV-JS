/*
* Написать функцию, которая принимает массив чисел, например [1,2,3,4,5], и переносит первый элемент массива в конец
* (например можно засунуть первый элемент в конец, затем удалить первый элемент), попробуй несколькими способами сделать, если догадаешься */

const array = [1,2,3,4,5];

function redirectFirstElementToEnd(array) {
    array.push(array.shift())
}

redirectFirstElementToEnd(array);
console.log(array)
