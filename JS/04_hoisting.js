// hoisting - перенос опередеоения некоторых вещей (ф-ий) в начло файла

// console.log(sum(1, 4));
// function sum(a, b) {
//     return a +b;
// }
// console.log(sum(1, 4));

// var  i;
// console.log(i); // undefined
// i = 42;
// console.log(i);

// const let - err
// console.log(num); //err
// const num = 42;
// console.log(num);

// Function Expression & Function Declaration
console.log(square(25));
// function square(num) {
//     return num * num;
// }

const square = function square(num) { // var err also
    return num * num;
}


