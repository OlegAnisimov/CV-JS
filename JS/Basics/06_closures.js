// Замыкания это возможность ф-ий иметь доступ к переменным из выщестоящего скоупа
// function sayHelloTwo(name) {
//     const msg  = `Hello ${name}`;
//
//     return function () {
//         console.log(msg ,name);
//     }
// }
//
// const helloToElena  = sayHelloTwo('Elena');
// const helloToIgor  = sayHelloTwo('Igor');
// console.log(helloToElena);
// helloToElena();
// helloToIgor();


// function createFrameworkManager() {
//     const fw = ['Angular', 'React'];
//     return {
//         print: function () {
//             console.log(fw.join(' '))
//         },
//         add: function (framework) {
//             fw.push(framework)
//         }
//     }
// }
//
// const manager = createFrameworkManager();
// console.log(manager);
// // console.log(fw); // err
// manager.print();
// manager.add('VueJS');
// manager.print();


// setTimeout

const fib = [1, 2, 3, 5, 8, 13];

// for (let i = 0; i < fib.length; i++) { // решение с исп var в консоль выводится fib[6] = undefined
//     setTimeout(function () {
//         console.log(`fib[${i}] = ${fib[i]}`)
//     }, 1500)
// }

// решение с использованием замыканий
for (var i = 0; i < fib.length; i++) {
    (function (j) {  // arrow functions allowed
        setTimeout(function () {
            console.log(`fib[${j}] = ${fib[j]}`)
        }, 1500)
    })(i)
}
