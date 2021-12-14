//scope указывает на видимость переменных
// context определяет - как функция была вызвана и он пост указывает на ключевое слово this  в текущем участке кода
// методы call, apply, bind - дают возможность форсировапнной передачи контекста

// const person = {
//     surname: 'Старк',
//     knows: function (what, name) { // данная ф-ия создала собственный контекст являясь частью контекста person
//         console.log(`Ты ${what} знаешь, ${name} ${this.surname}`)
//     }
// };
//
// const john = {
//     surname: 'Сноу',
// }
//
// person.knows('всё', 'Брандт');
//
// person.knows.call(john, 'ничего не', 'Джон');
// person.knows.apply(john, ['ничего не', 'Джон']);
// person.knows.call(john, ...['ничего не', 'Джон']);
// person.knows.bind(john, 'ничего не', 'Джон')();  // создать переменную и вызвать отдельно


// =============== explicit(явный) binding
// function Person (name, age) {
//     this.name = name;
//     this.age = age;
//
//     console.log(this)
// }
//
// const Elena = new Person('Elena', 20);
//
//
// function logThis() {
//     console.log(this);
// }
//
// const  obj = {
//     a: 42,
// }
//
// logThis.apply(obj);
// logThis.call(obj);
// logThis.bind(obj)();


// =============== implicit(неявный) binding
// const animal = {
//     legs: 4,
//     logThis: function () { // стрелочная ф-ия  здесь не сработает
//         console.log(this)
//     }
// }
//
// animal.logThis()


// ============ стрелочные ф-ии
function Cat(color) {
    this.color = color;
    console.log(this);
    ( () => console.log(`Arrow this`, this))() // стрелочная ф-ия не создает свой собственный контекст
}

new Cat('red');
