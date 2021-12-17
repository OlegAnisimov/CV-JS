// https://daruse.ru/zadaniya-po-js-dlya-prokachki

function f(gender) {
    if (typeof gender !== 'string') {
        console.log(`Param gender not a string`)
    } else {
        gender = gender.toUpperCase();
        switch (gender) {
            case 'M':
                console.log('M');
                break;
            case 'F':
                console.log('F');
                break;
        }
    }
}

console.log(f('F'));
console.log(f('m'));
