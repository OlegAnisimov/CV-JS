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
    const headers = {
        'Content-Type': 'application/json'
    }
    return fetch(URL, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        if (response.ok) {
            return response.json()
        }
        return response.json().then(error => {
            const e = new Error('Что то пошло ...')
            e.data = error
            throw e
        })
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
