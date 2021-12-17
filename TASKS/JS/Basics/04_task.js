// https://daruse.ru/zadaniya-po-js-dlya-prokachki

function f(number) {
    if (typeof number !== 'number') {
        console.log(`We need number`);
        return;
    }
    if (arguments.length > 1) {
        console.log(`We need 1 params`);
        return;
    }
    if (number = 0 ) {
        console.log(`we need number between 1 & 7`);
        return ;
    }

    const days = [
        '',
        'Monday',
        'Thusday',
        'Wensday',
        'Thirday',
        'Friay',
        'Satturdayay',
        'Sunday',
    ];

   for (let i = 1; i < days.length; i++) {
       if (i === number) {
           return days[i];
       }
   }
}

console.log(f(0));
console.log(f(1));
console.log(f(2));
console.log(f(3));
console.log(f(4));
console.log(f(5));
console.log(f(6));
console.log(f(7));
console.log(f('m'));
console.log(f(1, 2));
