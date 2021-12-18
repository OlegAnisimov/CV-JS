/*
* метод then доступен после выхова метода resolve
* инстансы класса Promise можно передавать между модулями
* и выполнять для них метод then
*
* метод catch выполянется если в промисе
* вызван метод reject
*
* метод finally будет вызван в любом случае, даже в случае ошибки
* */

console.log('Request data ...')
// true пример с использорванием колбэков
/*
* проблема кода с использованием колбэков в высокой вложенности и
* как следствие сложной поддержкой и модификацией такого кода
* */
// setTimeout(() => {
//     console.log('preparing data...')
//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }
//
//     setTimeout(() => {
//         backendData.modifed = true
//         console.log('Data recived', backendData)
//     }, 2000)
//
// }, 2000)

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('preparing data...')
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         resolve(backendData)
//     }, 2000)
// })
//
// p.then((data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modifed = true
//             resolve(data)
//             // console.log('Data recived', backendData)
//         }, 2000)
//     })
//
//     // p2.then(clientData => {
//     //     console.log('Data received', clientData)
//     // })
// })
//     .then(clientData => {
//         console.log('Data received', clientData)
//         clientData.fromPromise = true
//         return clientData
//
//     })
//     .then((data) => {
//         console.log('Modified data', data)
//     })
//     .catch(error => console.log('Error', error))
//     .finally(() => {
//         console.log('finally')
//     })

// ===================== Полезные фишки
const sleep = (ms) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}

// sleep(2000).then(() => {console.log('after 2 sec')})
// sleep(3000).then(() => {console.log('after 3 sec')})

Promise.all([sleep(2000), sleep(5000)])
    .then(() => { // выполниться когда завершаться все промисы в массиве см all
        console.log('All promises')
    })


Promise.race([sleep(2000), sleep(5000)])
    .then(() => { // выполниться когда отработает первый проммис из массива
        console.log('Race promises')
    })
