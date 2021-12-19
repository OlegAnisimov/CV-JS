// Interface segregation principle
/*
* Классы кот наследуются от базового класса, если они не используют методы базового класса, то они не должны от них зависить
* */

// Проблематика

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//
//     walk() {
//         console.log(`${this.name} can walk`)
//     }
//
//     swim() {
//         console.log(`${this.name} can swim`)
//     }
//
//     fly() {
//         console.log(`${this.name} can fly`)
//     }
// }
//
// class Dog extends Animal {
//     fly() {
//         return null
//     }
// }
//
//
// class Eagle extends Animal {
//     swim() {
//         return null
//     }
// }
//
// class Whale extends Animal {
//     fly() {
//         return null
//     }
//
//     walk() {
//         return null
//     }
// }
//
// const dog = new Dog('Rex');
//
// dog.walk()
// dog.swim()
// dog.fly()
//
// const eagle = new Eagle('Eagle')
// eagle.fly()
// eagle.swim()
// eagle.walk()
//
// const whale = new Eagle('Willy')
// whale.fly()
// whale.swim()
// whale.walk()


// ============= Правильно

class Animal {
    constructor(name) {
        this.name = name;
    }
}

const swimmer = {
    swim() {
        console.log(`${this.name} can swim`)
    }
}

const flyer = {
    swim() {
        console.log(`${this.name} can fly`)
    }
}

const walker = {
    swim() {
        console.log(`${this.name} can walk`)
    }
}

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, walker, swimmer);
Object.assign(Eagle.prototype, walker, flyer);
Object.assign(Whale.prototype, swimmer);

const dog = new Dog('Rex');

// dog.walk()  error нет необходимо поведения в классе
dog.swim()
// dog.fly() error нет необходимо поведения в классе

const eagle = new Eagle('Eagle')
// eagle.fly() error нет необходимо поведения в классе
eagle.swim()
// eagle.walk() error нет необходимо поведения в классе

const whale = new Eagle('Willy')
// whale.fly() error нет необходимо поведения в классе
whale.swim()
// whale.walk() error нет необходимо поведения в классе
