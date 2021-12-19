// Dependency inversion principle

/*
* Верхний уровень модуленй не должен зависеть от абстракций нижнего уровня
* Любые уровни должны зависеть от абстракций, а не от конкретики
*
* */


// Проблематика

class Fetch {
    request(url) {
        // return fetch(url).then(r => r.json())
        return Promise.resolve('Data from fetch')
    }
}

class LocalStorage {
    get() {
        return localStorage.getItem()
    }
}

class Database {
    constructor() {
        this.fetch = new Fetch()
    }

    getData() {
        return this.fetch.request('vk.com')
    }
}

const db = new Database()
console.log(db.getData());
