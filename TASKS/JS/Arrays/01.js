/*
* Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну, если все элементы четные, если бы хотя бы один элемент не четный, то false. */

const arrayOdd = [0, 0, 1, 2, 3, 4, 56, 6675, 57343, 6];
const arrayEven = [2, 4, 6, 6, 8]

function arrayEvened(array) {
    console.log(array.every((item) => item % 2 == 0));
}

arrayEvened(arrayEven)

// console.log(arrayEven.every((item) => item % 2 == 0));
// console.log(arrayOdd.every((item) => item % 2 == 0));
