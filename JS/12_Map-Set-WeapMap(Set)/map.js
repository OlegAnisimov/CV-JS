const obj = {
    name: 'Dracula',
    age: 549,
    job: 'Vampire',
}

const entries = [
    ['name', 'Dracula'],
    ['age', 549],
    ['job', 'Vampire'],
]

// console.log(Object.entries(obj));
// console.log(Object.fromEntries(entries));

const map = new Map(entries);

// console.log(map.get('age'));

map
    .set('newField', 22)
    .set(obj, 'value of obj')
    .set(NaN, 'NaN')

// console.log(map.get(obj))
// console.log(map.get(NaN))
// console.log(map)

// map.delete('job'); // return Boolean
//
// console.log(map.has('job'))
// console.log(map.size)
// map.clear()
// console.log(map.size)


// for (let [key, value] of map) {
//     console.log(key, value)
// }

// for (value of map.values()) {
//     console.log(value)
// }

// for (key of map.keys()) {
//     console.log(key)
// }


// map.forEach((value, key, m) => {
//     console.log(value, key)
// })

//==================== array from map

// const arr = [...map]
// const arr = Array.from(map)
//
// const mapObj = Object.fromEntries(map.entries())
// // console.log(arr)
// console.log(mapObj)


//=====================
const users = [
    {name: 'Dracula'},
    {name: 'Elena'},
    {name: 'Irina'},
]

const visits = new Map()

visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[2], new Date(new Date().getTime() + 5000 * 60))

function lastVisit(user) {
    return visits.get(user)
}

console.log(lastVisit(users[1]))
