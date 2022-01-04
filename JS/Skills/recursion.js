function fac(number) { // факториал
    // Условие эксртенного прекращения
    if (number < 0) return
    // Услвоие выхода из рекурсии
    if (number === 1) return number;
    // Рекурсия - прием при котором функция вызывает сама себя
    return number * fac(number - 1);
}

console.log(fac(5));
