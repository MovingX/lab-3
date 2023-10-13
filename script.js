

// Задача 1
function task1() {
    alert(null || 2 || undefined); // выведет 2, т.к. null считается ложным значениям
}

// Задача 2
function task2() {
    alert(alert(1) || 2 || alert(3)); // выведет 1 (результат alert(1)), затем 2 - как истинное значение, а alert(3) не выведется т.к. есть истинное значение 
}

// Задача 3
function task3() {
    alert(1 && null && 2); // выведет null т.к это первое ложное значение в цепочке оператора &&
}

// Задача 4
function task4() {
    alert(alert(1) && alert(2)); // выведет 1 (результат alert(1)), затем undefined, т.к. alert(2) не возвращает значение (возвращает undefined)
}

// Задача 5
function task5() {
    alert(null || 2 && 3 || 4); // выведет 3, т.к. приоритет оператора && выше, чем у оператора ||
}

// Задача 6
function task6() {
    let age = prompt("Введите возраст:");
    if (age >= 14 && age <= 90) {
        alert('ваш возраст ' + age);
    }
}

// Задача 7
function task7v1() {
    let age = prompt("Введите возраст:");
    if (!(age >= 14 && age <= 90)) {
        alert('ваш возраст ' + age);
    }
}

function task7v2() {
    let age = prompt("Введите возраст:");
    if (age < 14 || age > 90) {
        alert('ваш возраст ' + age);
    }
}

// Задача 8
function task8() {
    if (-1 || 0) alert('first'); // Выведет "first" потому что -1 || 0 равно -1, и это истинное значение
    if (-1 && 0) alert('second'); // Не выполнится (потому что -1 && 0 равно 0, и это ложное значение)
    if (null || -1 && 1) alert('third'); // Выведет "third" (потому что null || -1 && 1 равно -1, и это истинное значение)
}

// Задача 9
function task9() {
    let login = prompt("Введите логин", "");
    if (login === "Админ") {
        let password = prompt("Введите пароль", "");
        if (password === "Я главный") {
            alert("Здравствуйте!");
        } else if (password === null || password === "") {
            alert("Отменено");
        } else {
            alert("Неверный пароль");
        }
    } else if (login === null || login === "") {
        alert("Отменено");
    } else {
        alert("Я вас не знаю");
    }
}

// Задача 10
function task10() {
    let i = 3;
    while (i) {
        alert(i--); // Выведет последовательность от 3 до 1
    }
}

// Задача 11
function task11v1() {
    let i = 0;
    while (++i < 5) alert(i);
}
// Оба цикла выведут alert с одинаковыми значениями
function task11v2() {
    let i = 0;
    while (i++ < 5) alert(i);
}

// Задача 12
function task12v1() {
    for (let i = 0; i < 5; i++) alert(i);
}
// Оба цикла выведут alert с одинаковыми значениями
function task12v2() {
    for (let i = 0; i < 5; ++i) alert(i);
}

// Задача 13
function task13() {
    for (let i = 2; i <= 10; i += 2) {
        alert(i);
    }
}

// Задача 14
function task14v1() {
    for (let i = 0; i < 3; i++) {
        alert(`number ${i}!`);
    }
}

function task14v2() {
    let i = 0;
    while (i < 3) {
        alert(`number ${i}!`);
        i++;
    }
}

// Задача 15
function task15() {
    let number;
    do {
        number = prompt("Введите число больше 100:", "");
    } while (number <= 100 && number !== null);
}

//задача 16
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function task16() {
    n = prompt("Введите число:", "10");
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            alert(i);
        }
    }
}


// Задача 17
function task17() {
    browser = prompt("Введите Браузер:", "Edge");
    if (browser === 'Edge') {
        alert("You've got the Edge!");
    } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
        alert('Okay we support these browsers too');
    } else {
        alert('We hope that this page looks ok!');
    }
}

// Задача 18
function task18() {
    const number = +prompt('Введите число между 0 и 3', '');
    switch (number) {
        case 0:
            alert('Вы ввели число 0');
            break;
        case 1:
            alert('Вы ввели число 1');
            break;
        case 2:
        case 3:
            alert('Вы ввели число 2, а может и 3');
            break;
        default:
            alert('Вы ввели число, не входящее в диапазон от 0 до 3');
    }
}

// Задача 19
function task19v1() {
    age = prompt("Введите возраст", "19");
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('Родители разрешили?');
    }
}
//Нет т.к. если условие if не выполняется, функция переходит к следующей строке и выполняет confirm.
function task19v2() {
    age = prompt("Введите возраст", "19");
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Родители разрешили?');
}

// Задача 20
function task20() {
    age = prompt("Введите возраст", "19");
    return (age > 18) ? true : confirm('Родители разрешили?');
}

// Задача 21
function task21() {
    a = prompt("Введите число а: ", "2");
    b = prompt("Введите число b: ", "5");
    return a < b ? a : b;
}

// Задача 22
function task22() {
    const x = +prompt("Введите число x:", "");
    const n = +prompt("Введите степень n:", "");

    const result = pow(x, n);
    alert(`Результат: ${result}`); 
}

function pow(x, n) {
    return x ** n;
}

