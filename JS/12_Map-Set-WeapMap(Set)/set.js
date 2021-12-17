const set = new Set([
    1,
    2,
    3,
    3,
    3,
    3,
    4,
    5,
    5,
    6
])

// console.log(set)

set.add(10)
    .add(20)
    .add(20)
    .add(30)

// console.log(set)

// console.log(set.has(30))
// console.log(set.has(300))

// console.log(set.size)
// set.delete(1)
// console.log(set.size)


// set.clear()
// console.log(set.size)

// set это структура данных проще чем map
// эти методы нужны для обратной совместимости с map
// чтобы делать из set -> map
// console.log(set.values())
// console.log(set.keys())

// console.log(set.entries()) // key===value


// for (let key of set) {
//     console.log(key) // key===value
// }

function uniqueValues(array) {
    // return [...new Set(array)]
    return Array.from(new Set(array))
}

console.log(uniqueValues([1,1,1,1,2,2,2,2,3,4,4,4,4,5,5,6,6,6]))
