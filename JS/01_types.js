//null, undefined, boolean, number, string, object, symbol
let x;
let y = null;

// console.log(typeof 0);
//
// console.log(typeof undefined);  // переменная кот не имеет значения, ф-ии кот ничего не вовращает.
// console.log(typeof x);
//
// console.log(typeof true);
// console.log(typeof 'true');
// console.log(typeof {});
// console.log(typeof Math);
// console.log(typeof Date);
//
// console.log(typeof Symbol('d'));
//
// console.log(typeof null); // неточность 1
// console.log(typeof function () {}); // неточность 2
// console.log(typeof NaN); // неточность 3
// console.log(undefined * 1); // неточность 3
//
//
// console.log(typeof y);


// Приведение типов
let language = 'js';
if (language) {
    console.log(`The best language is ${language}`);
}

// false values '', 0, null, undefined, false, NaN
// console.log(Boolean(NaN));
// console.log(Boolean(''));
// console.log(Boolean('Hi'));
// console.log(Boolean(' '));
// console.log(Boolean('0'));
// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean([]));
// console.log(Boolean({}));
// console.log(Boolean(function () {}));


// строки и числа
// console.log('' + 1 + 0); // str
// console.log('' - 1 + 0); // num
// console.log(1 + '2'); // str
// console.log(1 - '2'); // num
// console.log(1 * '2'); // num
// console.log('2' * '2'); // num
// console.log(1 / '2'); // num
//
// console.log('px' + 1 + 1); // str
// console.log('42px' - 2); // NaN
//
// console.log(null + 2); //num
// console.log(undefined + 2); //NaN

//  == vs ===
// == с приведение типов
// === без приведение типов

// console.log(2 == '2'); //true
// console.log(2 === '2'); //false
// console.log(undefined == null); // true
// console.log(undefined === null); // false
//
// console.log('0' == false); //true
// console.log('0' == 0); //true

//========= неоднозначные сравнения
// console.log(false == '');// true
// console.log(false == []);// true
// console.log(false == {});// false
//
// console.log('' == 0);// true
// console.log('' == []);//  true
// console.log('' == {});// false
//
// console.log(0 == null);// false
// console.log(0 == []);// true
// console.log(0 == {});// false
