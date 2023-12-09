// 7-day

// 1. Создайте функцию reverseArray, которая принимает массив
// в качестве аргумента и возвращает новый массив с элементами
// в обратном порядке. Протестируйте функцию на массиве чисел.

function reverseArray(arr) {
  return arr.reverse();
}

let numbersArray = [1, 2, 3, 4, 5];
console.log(reverseArray(numbersArray));

// 2. Создайте объект product с ключами name, price и quantity.
// Создайте функцию calculateTotalPrice, которая принимает объект product
// и возвращает общую стоимость продукта (price * quantity). Протестируйте функцию.

let product = { name: "Laptop", price: 800, quantity: 2 };

function calculateTotalPrice(product) {
  return product.price * product.quantity;
}

console.log(calculateTotalPrice(product));

// 3. Создайте массив cities с различными городами.
// Используйте метод массива для удаления последнего элемента.
// Выведите обновленный массив в консоль.

let cities = ["New York", "London", "Paris", "Tokyo"];
cities.pop();
console.log(cities);

// 4. Создайте переменные num1 и num2 с числовыми значениями.
// Создайте функцию checkNumbers, которая принимает два числа
// в качестве аргументов и выводит сообщение "Число num1 больше num2",
// если num1 больше num2, "Число num1 меньше num2", если num1 меньше num2,
// и "Число num1 равно num2", если они равны. Протестируйте функцию с вашими переменными.

let num1 = 15;
let num2 = 10;

function checkNumbers(num1, num2) {
  if (num1 > num2) {
    console.log("Число " + num1 + " больше " + num2);
  } else if (num1 < num2) {
    console.log("Число " + num1 + " меньше " + num2);
  } else {
    console.log("Число " + num1 + " равно " + num2);
  }
}

checkNumbers(num1, num2);

// 5. Создайте функцию truncateString, которая принимает строку и число
// в качестве аргументов. Если длина строки больше числа, обрежьте строку
// до указанной длины и добавьте многоточие в конце. Выведите результат в консоль.

function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  }
  return str;
}

let longString = "This is a very long string that needs to be truncated.";
console.log(truncateString(longString, 20));

// 6. Создайте массив numbers с числами. Используйте метод массива для создания
// нового массива, содержащего только положительные числа из исходного массива.
// Выведите оба массива в консоль.

let numbers = [-2, 5, -10, 15, -20, 25];
let positiveNumbers = numbers.filter((number) => number > 0);

console.log(numbers);
console.log(positiveNumbers);

// 7. Создайте функцию isLeapYear, которая принимает год в качестве аргумента
// и возвращает true, если год високосный, и false в противном случае.
// Протестируйте функцию с несколькими годами.

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(isLeapYear(2020)); // true
console.log(isLeapYear(2023)); // false

// 8. Создайте объект user с ключами name и email.
// Используйте оператор расширения объекта для создания нового объекта userExtended,
// который также содержит ключ age. Выведите информацию о расширенном объекте в консоль.

let user = { name: "Aizhamal", email: "aizhamal@gmail.com" };
let userExtended = { ...user, age: 18 };

console.log(userExtended);

// 9. Создайте функцию findMaxNumber, которая принимает массив чисел в качестве аргумента
//  и возвращает максимальное число в массиве. Протестируйте функцию с массивом.

function findMaxNumber(numbers) {
  return Math.max(...numbers);
}

let arrayNumbers = [10, 5, 8, 20, 15];
console.log(findMaxNumber(arrayNumbers));

// 10. Создайте переменные width и height, представляющие ширину и высоту прямоугольника.
// Создайте условный оператор, который выводит сообщение "Прямоугольник" в консоль,
// если ширина и высота равны, и "Квадрат" в противном случае.

let width = 10;
let height = 10;

if (width === height) {
  console.log("Квадрат");
} else {
  console.log("Прямоугольник");
}
