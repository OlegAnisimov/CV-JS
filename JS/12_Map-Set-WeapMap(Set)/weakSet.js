// похоже на weakMap
// значение тшльео объекты
// если объект удаляеться сборщиком мусора, то он
// автоматом удаляется из weakSet

const users = [
    {name: 'Dracula'},
    {name: 'Elena'},
    {name: 'Irina'},
]

const visits = new WeakSet()

visits
    .add(users[0])
    .add(users[1])

users.splice(1, 1)

console.log(visits.has(users[0]))
console.log(visits.has(users[1]))
console.log(visits.has(users[2]))
