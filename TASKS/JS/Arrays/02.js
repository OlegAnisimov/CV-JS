/*
* https://daruse.ru/zadaniya-po-js-dlya-prokachki
* Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну, если хотя бы один элемент нечетный, если все четные, то false.
* */

const arrayOdd = [0, 0, 1, 2, 3, 4, 56, 6675, 57343, 6];
const arrayEven = [2, 4, 6, 6, 8]

function arrayEvened(array) {
    if (array.find((item) => item % 2 !== 0)) {
        console.log(true);
    } else if (array.every((item) => item % 2 == 0)) {
        console.log(false)
    }

}

arrayEvened(arrayEven)
arrayEvened(arrayOdd)
