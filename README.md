<h1 align="center"> МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ «САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</h1>
<br>
<br>
<br>
<br>
<br>
<br>
<p align="center">Лабораторная работа №3</p>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<p align="right">Выполнил: Морошкин Максим Александрович</p>
<p align="right">Проверил: Соболев Е. И.</p>
<br>
<br>
<br>
<br>
<br>
<br>

<p align="center">г. Южно-Сахалинск <br> 2023 год</p>

<h2 align="center">Введение</h2>
<p align="justify">Основы языка JavaScript</p>

<h2>Цели и задачи</h2>
1. Что выведет код ниже? alert( null || 2 || undefined );1
<br>
2.Что выведет код ниже? alert( alert(1) || 2 || alert(3) );
<br>
3. Что выведет код ниже? alert( 1 && null && 2 );
<br>
4. Что выведет alert (И)? alert( alert(1) && alert(2) );
<br>
5. Что выведет этот код? alert( null || 2 && 3 || 4 );
<br>
6. Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно. «Включительно» означает, что значение переменной age может быть равно 14 или 90.
<br>
7.Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно. Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.
<br>
8. Какие из перечисленных ниже alert выполнятся? Какие конкретно значения будут результатами выражений в условиях if(...)?
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
<br>
9. Проверка логина важность: Напишите код, который будет спрашивать логин с помощью prompt. Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю». Пароль проверять так: Если введён пароль «Я главный», то выводить «Здравствуйте!», Иначе – «Неверный пароль», При отмене – «Отменено». Блок-схема: Для решения используйте вложенные блоки if. Обращайте внимание на стиль и читаемость кода.  Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''. Нажатие клавиши Esc во время запроса возвращает null.
<br>
10. Какое последнее значение выведет этот код? Почему?
let i = 3;
while (i) {
  alert( i-- );
}
<br>
11. Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
Оба цикла выводят alert с одинаковыми значениями или нет?
Префиксный вариант ++i:
let i = 0;
while (++i < 5) alert( i );
Постфиксный вариант i++
let i = 0;
while (i++ < 5) alert( i );
<br>
12. Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом. Оба цикла выведут alert с одинаковыми значениями или нет?
Постфиксная форма:
for (let i = 0; i < 5; i++) alert( i );
Префиксная форма:
for (let i = 0; i < 5; ++i) alert( i );
<br>
13. При помощи цикла for выведите чётные числа от 2 до 10.
<br>
14. Перепишите код, заменив цикл for на while, без изменения поведения цикла.
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
<br>
15. Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее. Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC). Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.
<br>
16. Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1. Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток. Например, 5 — это простое число, оно не может быть разделено без остатка на 2, 3 и 4. Напишите код, который выводит все простые числа из интервала от 2 до n. Для n = 10 результат должен быть 2,3,5,7.
<br>
17. Напишите if..else, соответствующий следующему switch:
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;
  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
<br>
18. Перепишите код с использованием одной конструкции switch:
 const number = +prompt('Введите число между 0 и 3', '');
if (number === 0) {
  alert('Вы ввели число 0');
}
if (number === 1) {
  alert('Вы ввели число 1');
}
if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}
<br>
19. Следующая функция возвращает true, если параметр age больше 18. В ином случае она запрашивает подтверждение через confirm и возвращает его результат:
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}
Будет ли эта функция работать как-то иначе, если убрать else?
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}
Есть ли хоть одно отличие в поведении этого варианта?
<br>
20. Следующая функция возвращает true, если параметр age больше 18. В ином случае она задаёт вопрос confirm и возвращает его результат.
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
Сделайте два варианта функции checkAge:
Используя оператор ?
Используя оператор ||
<br>
21. Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
Пример вызовов:
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
<br>
22. Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
<br>
23. 7 kyu https://www.codewars.com/kata/highest-and-lowest
<br>
24. 7 kyu https://www.codewars.com/kata/disemvowel-trolls
<br>
25. 7 kyu https://www.codewars.com/kata/isograms
<br>
26. 7 kyu https://www.codewars.com/kata/digits-explosion
<br>
27. 6 kyu https://www.codewars.com/kata/handshake-problem
<br>
28. 6 kyu https://www.codewars.com/kata/duplicate-encoder
<br>
29. 6 kyu https://www.codewars.com/kata/n-th-fibonacci
<br>
30. 6 kyu https://www.codewars.com/kata/multiples-of-3-or-5
<br>
31.Придумайте просто Telegram бота, при создании используйте Node JS, ,библиотеку использующую Telegram API,  express

<h2>Решение задач</h2>

```js


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


```

<h2>Запуска веб-страницы с использованием Node.js и фреймворка Express</h2>
1.Установить node.js<br>
2.Создать папку проекта, и выполнить команду npm install express, для создания package.json<br>
3.Создать файл server.js и прописать в нём минимальный сервер для запуска страницы по адресу http://localhost:3000 и дальнейшее выполнее всех файлов в корне проекта(например index.html и script.js)<br>

```js
const express = require('express');
const app = express();
const port = 3000;

//обслуживать все файлы из корня проекта, включая index.html, server.js и другие статические файлы.
app.use(express.static(__dirname)); 

// Запуск сервера
//app.listen(port, callback) - метод используется для запуска HTTP-сервера на указанном порту
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});

```

<h2>Вывод</h2>
Я научился создавать веб-сервер с помощью Node.js и Express:<br>
1.Запускать сервер, который может обслуживать веб-страницы.<br>
2.Подключать HTML-страницы и другие файлы (например JavaScript) к серверу.<br>
3.Изучил возможности JavaScript <br>

