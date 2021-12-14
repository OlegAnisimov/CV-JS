// let
// let a = 'a';
// let b = 'b';
//
// {
//     a  = 'new a';
//     console.log(a);
//     // console.log(b); // err
//     let b = 'local b';
//     console.log(b)
// }
// console.log(a);
// console.log(b);

// const
// Для примитивных типов нельзя переназначить значение
// const PORT = '8080';
// PORT = '2000'; // err

// const arr = [1, 2, 3];
// arr.push(4);
// arr[0] = 'Y';
// arr = ''; // err
// console.log(arr);

const obj  = {};
obj.name  = 'Yoda';
obj.age  = 42;
// obj = ''; // err можем менять только внутреннее состояние объекта
console.log(obj);
