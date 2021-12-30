// https://daruse.ru/zadaniya-po-js-dlya-prokachki
// Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван)

// console.log((new Date()).getHours());

function helloWithDayPart(name) {
    const currentHour = (new Date()).getHours();
    if (currentHour >= 0 && currentHour <= 6) {
        console.log('Good night' + ' ' + name)
    } else if (6 < currentHour && currentHour <= 12) {
        console.log('Good morning' + ' ' + name)
    } else if (12 < currentHour && currentHour <= 18) {
        console.log('Good day' + ' ' + name)
    } else if (18 < currentHour && currentHour < 24) {
        console.log('Good evening' + ' ' + name)
    }
}

helloWithDayPart('Oleg')
