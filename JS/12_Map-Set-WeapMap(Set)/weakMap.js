// map с особенностями
// позволяет избегать утечек данных в jS
// У weakMap ключами  могут быть только объекты

let obj = {
    name: 'weakMap'
}
//
// const arr = [obj]
// obj = null // Сборщик мусора удалил, но  данный объект остается в памяти. Это нормальное поведение
// console.log(obj)
// console.log(arr[0])

const map = new WeakMap([
    [obj, 'obj data']
])

// get set delete has - у weakMap только эти методы

obj = null
// console.log(map.get(obj))
// console.log(map) //  { <items unknown> }


//===================
const cache  = new WeakMap()

function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now())
    }
    return cache.get(user)
}

let lena = {
    name: 'Elena'
}

let ira = {
    name: 'Irina'
}

cacheUser(lena)
cacheUser(ira)

lena = null

console.log(cache.has(lena))
console.log(cache.has(ira))
