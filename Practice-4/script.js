// 4-day

// 1 Создайте переменную name и присвойте ей ваше имя.
// Создайте вторую переменную greeting, которая будет
// содержать приветствие с использованием переменной name.
// Выведите greeting в консоль.

let name = "Aizhamal";
let greeting = "Привет, " + name + "!";
console.log(greeting);

// 2 Создайте массив fruits с названиями различных фруктов.
// Выведите в консоль второй элемент этого массива.

let fruits = ["Яблоко", "Груша", "Банан", "Апельсин", "Киви"];
console.log(fruits[1]);

// 3 Создайте функцию calculateSquare, которая принимает число
// в качестве аргумента и возвращает его квадрат.
// Вызовите функцию с любым числом и выведите результат.

function calculateSquare(number) {
  return number * number;
}

let result = calculateSquare(6);
console.log(result);

// 4. Создайте объект book с ключами title и author,
// представляющими название и автора книги.
// Выведите информацию о книге в консоль.

let book = {
  title: "Ник Вуйчич",
  author: "Жизнь без границ",
};

console.log(book.title + " by " + book.author);

// 5. Используйте цикл for для вывода четных чисел от 1 до 10 включительно.

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

// 6. Создайте функцию isAdult, которая принимает возраст
// в качестве аргумента и возвращает true, если возраст больше или равен 18,
// и false в противном случае. Выведите результат вызова функции с вашим возрастом.

function isAdult(age) {
  return age >= 18;
}

console.log(isAdult(20));

// 7. Создайте массив numbers с числами от 1 до 5.
// Используйте метод массива для добавления числа 6 в
// конец массива. Выведите обновленный массив в консоль.

let numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);

// 8. Создайте функцию reverseString, которая принимает строку
// в качестве аргумента и возвращает обратную строку.
// Вызовите функцию с любой строкой и выведите результат.

function reverseString(str) {
  return str.split("").reverse().join("");
}

let reversed = reverseString("Привет");
console.log(reversed);

// 9. Создайте переменную price и присвойте ей числовое значение.
// Создайте условный оператор, который выводит в консоль сообщение
// "Дорого", если price больше 50, и "Доступно", если меньше или равно 50.

let price = 60;

if (price > 50) {
  console.log("Дорого");
} else {
  console.log("Доступно");
}

// 10. Создайте функцию calculateAverage, которая принимает массив чисел
// в качестве аргумента и возвращает их среднее значение.
// Вызовите функцию с массивом чисел и выведите результат.

function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

let average = calculateAverage([10, 20, 30, 40, 50]);
console.log(average);
