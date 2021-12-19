// single responsibility
/*
* Клас должен иметь одно функциональное предназначение
* */

class News {
    constructor(title, text) {
        this.title = title;
        this.text = text;
        this.modifed = false;
    }

    update(text) {
        this.text = text;
        this.modifed = true;
    }
    /*
    класс news реализует функционал для опеределенной новости
    * методы toHTML toJSON не относятся к конкретной новости - это общий механизм для отображения каждой новости
    * */

    // toHTML() {
    //     return `
    //     <div class="news">
    //         <h1>${this.title}</h1>
    //         <p>${this.text}</p>
    //     </div>`
    // }
    //
    // toJSON() {
    //     return JSON.stringify({
    //         title: this.title,
    //         text: this.text,
    //         modifed: this.modifed,
    //     }, null, 2)
    // }
}

const news = new News('Зима', 'Внезапно выпал снег');

// console.log(news.toHTML())
// console.log(news.toJSON())

class NewsPrinter {
    constructor(news) {
        this.news = news;
    }

    html() {
        return `
        <div class="news">
            <h1>${this.news.title}</h1>
            <p>${this.news.text}</p>
        </div>`
    }

    json() {
        return JSON.stringify({
            title: this.news.title,
            text: this.news.text,
            modifed: this.news.modifed,
        }, null, 2)
    }

    xml() {
        return `
        <news>
        <title>${this.news.title}</title>
        <text>${this.news.text}</text>
</news> `
    }
}

const printer = new NewsPrinter(news)
console.log(printer.html());
console.log(printer.json())
console.log(printer.xml())



