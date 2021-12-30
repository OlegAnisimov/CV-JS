/*Написать функцию, которая принимает массив чисел, например [1,2,3,4,5]
 и функция возращает среднее арифметическое, (округлить результат до десятых) */

const array = [1,2,3,4,5]

function averageArray(array) {
    let sumNumbers = 0;
    array.forEach((number) => {
        sumNumbers += number
    })
    console.log(sumNumbers / array.length)
}

averageArray(array)
