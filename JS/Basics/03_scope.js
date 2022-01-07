// есть глобальный - Document, Window в браузере, есть локальный внутри ф-ий
let check = 'check';
function funcA() {
    let a = 1;

    function funcB() {
        let b = 2;

        function funcC() {
            let c = 3;
            console.log('funcC', a, b, c);
            console.log(check)
        }

        funcC();
        console.log('funcB', a, b);
    }

    funcB();
    console.log('funcA', a);
}

funcA();
