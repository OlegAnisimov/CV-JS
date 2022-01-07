// http://old.code.mu/tasks/javascript/base/rabota-s-funkciyami-dlya-massivov-v-javascript.html

// 	Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// const arr1 = [1, 2, 4];
// const arr2 = [5, 6, 7];
//
// const res = arr1.concat(arr2);
// console.log(res)
// console.log(arr2.concat(arr1));

// 	Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
let arr = [1, 2, 3, 4, 5, 6, 7,]
// console.log(arr.reverse());
// arr.push(4)
// console.log(arr);
// arr.unshift(0)
// console.log(arr)

// console.log(arr.slice(0, 2));
// console.log(arr)
// console.log(arr.splice(4));

/*
*
Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
* */

/*
* http://code.mu/ru/javascript/manual/array/splice/
* */

let a1 = [1, 2, 3, 4, 5]
// a1.splice(1, 2);
// console.log(a1)

// let a2  = a1.splice(1, 3)
// console.log(a2)

// a1.splice(2, 0, 'a', 'b', 'c')
// console.log(a1)


// a1.splice(1, 0, 'a', 'b')
// a1.splice(6, 0, 'c')
// a1.splice(8, 0, 'e')
// console.log(a1)


// 	Дан массив [3, 4, 1, 2, 7]. Отсортируйте его. 

// let a = [3, 4, 1, 2, 7]
// a.sort((a, b) => {
//     return -a+b
// })
// console.log(a)


// {js:'test', jq: 'hello', css: 'world'}
// let obj = {js:'test', jq: 'hello', css: 'world'}
//
// console.log(Object.keys(obj));

// https://wm-school.ru/js/array_exercises.php

// Напишите функцию copyArr(arr), которая копирует массив не изменяя иригинал.
var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

function arrayClone(arr) {
// let resArr = []
//     for (let i = 0; i < arr.length; i++) {
//         resArr.push(arr[i])
//     }
//     return resArr
}

// function arrayClone(arr) {
//     let resArr = arr.slice(0)
//     return resArr
// }
//
// console.log(arrayClone(vegetables))
// console.log(arrayClone(vegetables) === vegetables);



