// 1. Запросите у пользователя число, возведите это число во
// 7-ю степень и выведите на экран.

// let n = Math.floor(prompt("Введите число:"));
// alert(`Число ${n} в 7 степени равно ${n**7}`);


// 2. Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел.

// let a = +prompt("Введите первое число");
// let b = +prompt("Введите второе число");
// let c = (a + b)/2;
// alert(`среднее арифметическое ${a} и ${b} равно ${c}`);


// 3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

// let A = +prompt("Введите сторону квадрата");
// alert(`Периметр квадрата со стороной ${A} равен ${4*A}`);


// 4. Реализуйте конвертор из километров в мили (пользователь вводит километры,
// программа выводит мили). 1 км = 0,621371 миль. Это значение укажите в коде как константу.

let km = +prompt("Введите количество километров");
const m = 0.621371;
alert(`${km} километра будет ${km*m} в милях`);