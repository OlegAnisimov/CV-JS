// исп в двух разных контекстах
/*
* 1 Каждый объект имеет свой прототип, который берётся от родительского элемента
*   чтобы получить родительский прототип исп слово __proto__(es6) аналог Object.getProtypeOf() - es5
* 2 Св-во prototype у различных ф-ий, кот служит для передачи св-в объекту который создается через ключевое слво new
* */
// console.log('ff'.__proto__);
// console.log(Object.getPrototypeOf('ff'));


// function Cat(color, name) {
//     this.color = color;
//     this.name = name;
// }
//
// Cat.prototype.voice = function () {
//     console.log(`Cat ${this.name} says meow`)
// }
//
// const cat  = new Cat('red', 'Igor');
//
// console.log(cat.__proto__ === Cat.prototype);
// console.log(Cat.prototype);
// console.log(cat);
// console.log(cat.constructor);
//
// cat.voice();


// ======== Собственные св-ва объектов, св-ва доступные в прототипе
// function Person() {
//
// }
//
// Person.prototype.legs = 2;
// Person.prototype.skin = 'white';
//
// const person = new Person();
// person.name = 'Ivan';
//
// // console.log('skin' in person);
// // console.log('name' in Person.prototype);
//
// console.log(person.hasOwnProperty('name'));
// console.log(person.hasOwnProperty('skin'));


// ===========  Object.create()
// const proto = {
//     year: 2222,
// };
//
// const myYear = Object.create(proto);
// proto.year = 1111;
//
// console.log(myYear.year)
// console.log(myYear.hasOwnProperty('year'))
// console.log(myYear.__proto__ === proto)

// ============== Advanced https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT
// const person = {
//     name: 'Igor',
//     age: 25,
//     greet: function () {
//         console.log(`Greet!`)
//     }
// }

// console.log(person.name);
// console.log(person.age);
// person.greet()
// console.log(person.toString())

const person = new Object({
    name: 'Igor',
    age: 25,
    greet: function () {
        console.log(`Greet!`)
    }
})

Object.prototype.sayHello = function () {
    console.log(`Hello..`)
}

const Elena = Object.create(person);

// const str = 'I am string';
const str = new String('I am string');
