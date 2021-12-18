const requestURL = 'https://jsonplaceholder.typicode.com/users';

// const XHR = new XMLHttpRequest(resolve, reject);
// XHR.open('GET', requestURL);
// // XHR.responseType = 'json' // так можно получить объект
// XHR.onload = () => {
//     if (XHR.status >= 400) {
//         console.error(XHR.response)
//     } else {
//         console.log(XHR.response) // по умолчанию string
//         console.log(JSON.parse(XHR.response)) // так можно получить объект
//     }
// }
// XHR.onerror = () => {
//     console.log(XHR.response)
//     console.log('Error')
// }
// XHR.send()

function sendRequest(method, URL, body = null) {
    return new Promise((resolve, reject) => {
        const XHR = new XMLHttpRequest();
        XHR.open(method, URL);

        XHR.responseType = 'json' // так можно получить объект
        XHR.setRequestHeader('Content-Type', 'application/json')
        XHR.onload = () => {
            if (XHR.status >= 400) {
                reject(XHR.response)
            } else {
                resolve(XHR.response)
            }
        }
        XHR.onerror = () => {
            reject(XHR.response)
        }
        XHR.send(JSON.stringify(body))
    })
}

// GET
// sendRequest('GET', requestURL)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// POST
sendRequest('POST', requestURL, {
    name: 'Dracula',
    age: 457
})
    .then(data => console.log(data))
    .catch(err => console.log(err))
