// Open Close principle
/*
* Клас должен быть доступен для расширения
* но закрыт для модификации
* при необходимости изменения, старый код не меняется,
* */

/*
* Для соблюдения принципа необходима создать
* класс Shape, от которого будут наследовать все виды фигур
* */

class Shape {
    area() {
        throw new Error('Area method should be implemented')
    }
}

class Square extends Shape {
    constructor(size) {
        super()
        // this.type = 'square'; // не нужен при соблюдении приципа
        this.size = size;
    }

    area() {
        return this.size ** 2;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super()
        // this.type = 'circle';// не нужен при соблюдении приципа
        this.radius = radius;
    }

    area() {
        return (this.radius ** 2) * Math.PI;
    }
}

class Rect extends Shape {
    constructor(width, height) {
        super()
        this.width = width;
        this.height = height;
        // this.type = 'rect'; // не нужен при соблюдении приципа
    }

    area() {
        return this.height * this.width;
    }
}

class Triangle extends Shape {
    constructor(width, height) {
        super(a, b)
        this.a = a;
        this.b = b;
    }

    area() {
        return (this.a * this.b / 2);
    }
}

// Реализация без базовго класса Shape  НЕ СООТВЕТВУЕТ принципу
/*
* Так как при добавление новых фигур мы вынуждены добавлять новый if в AreaCalculator.sum
*
* */
class AreaCalculator {
    constructor(shapes = []) {
        this.shapes = shapes;
    }

    sum() {
        return this.shapes.reduce((acc, shape) => {
            // if (shape.type === 'circle') {
            //     acc += (shape.radius ** 2) * Math.PI
            // } else if (shape.type === 'square') {
            //     acc += shape.size ** 2
            // } else if (shape.type === 'rect') {
            //     acc += shape.width * shape.height
            // }
            acc += shape.area()
            return acc;
        }, 0)
    }
}

// console.log(new Circle(5));
// console.log(new Square(5));

const calc = new AreaCalculator([
    new Circle(5),
    new Circle(7),
    new Square(7),
    new Rect(7, 2),
    new Triangle(7, 2)
])

console.log(calc.sum());
