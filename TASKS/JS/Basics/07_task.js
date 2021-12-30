/*
* https://daruse.ru/zadaniya-po-js-dlya-prokachki
* Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние возраста (1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый). Например. 33 - зрелый
* */

for (let i = 1; i <= 100; i++) {
    const child = 'child';
    const young = 'young';
    const mature = 'mature';
    const old = 'old';

    if (i <= 18) {
        console.log(i, child)
    } else if (i > 18 && i <= 31) {
        console.log(i, young)
    } else if (i > 31 && i < 56) {
        console.log(i, mature)
    } else if (i >= 56) {
        console.log(i, old)
    }
}
