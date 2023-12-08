// 1. Создайте функцию calculatePower, которая принимает два числа в качестве аргументов:
// base (основание) и exponent (показатель степени). Ф
// ункция должна возвращать результат возведения основания в степень.
// Протестируйте функцию с числами.

function calculatePower(base, exponent) {
  return Math.pow(base, exponent);
}

console.log(calculatePower(2, 3)); // 2^3 = 8

// 2. Создайте массив students с объектами, представляющими студентов.
// У каждого объекта должны быть ключи name (имя), age (возраст) и grade (оценка).
// Выведите информацию о каждом студенте в консоль.

let students = [
  { name: "Aizhamal", age: 18, grade: 100 },
  { name: "Bektur", age: 19, grade: 92 },
  { name: "Asel", age: 20, grade: 102 },
];

for (let student of students) {
  console.log(
    "Name: " +
      student.name +
      ", Age: " +
      student.age +
      ", Grade: " +
      student.grade
  );
}

// 3. Создайте функцию filterEvenNumbers, которая принимает массив чисел
// в качестве аргумента и возвращает новый массив, содержащий только четные числа.
// Протестируйте функцию на массиве.

function filterEvenNumbers(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}

let originalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenNumbers = filterEvenNumbers(originalNumbers);
console.log(evenNumbers);

// 4. Создайте переменную today,
// которая будет содержать текущую дату.
// Выведите эту дату в консоль в удобочитаемом формате.

let today = new Date();
console.log(today.toLocaleDateString());

// 5. Создайте функцию calculateArea, которая принимает радиус круга
// в качестве аргумента и возвращает его площадь.
// Протестируйте функцию с радиусами различных кругов.

function calculateArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}

console.log(calculateArea(5));

// 6. Создайте объект rectangle с ключами width (ширина) и height (высота).
// Создайте функцию calculatePerimeter, которая принимает объект rectangle и возвращает его периметр.
// Протестируйте функцию.

let rectangle = { width: 10, height: 6 };

function calculatePerimeter(rect) {
  return 2 * (rect.width + rect.height);
}

console.log(calculatePerimeter(rectangle));

// 7. Создайте массив words с различными словами.
// Используйте метод массива для создания нового массива,
// в котором каждое слово преобразовано в верхний регистр.
// Выведите оба массива в консоль.

let words = ["apple", "banana", "cherry", "date"];

let uppercaseWords = words.map((word) => word.toUpperCase());
console.log(words);
console.log(uppercaseWords);

// 8. Создайте функцию countVowels, которая принимает строку в качестве аргумента
// и возвращает количество гласных букв в строке.
// Протестируйте функцию на различных строках.

function countVowels(str) {
  let vowels = str.match(/[aeiouAEIOU]/g);
  return vowels ? vowels.length : 0;
}

console.log(countVowels("Hello, Aizhamal"));

// 9. Создайте переменные num1 и num2 и присвойте им числовые значения.
// Используйте тернарный оператор для определения, больше ли num1 чем num2,
// и выведите соответствующее сообщение в консоль.

let num1 = 15;
let num2 = 10;

let message =
  num1 > num2 ? "num1 больше чем num2" : "num1 меньше или равно num2";
console.log("num1 = ", +num1);
console.log("num2 = ", +num2);
console.log(message);

// 10. Создайте объект person с ключами name и age.
// Используйте оператор расширения объекта для создания нового объекта personExtended,
// который также содержит ключ city. Выведите информацию о расширенном объекте в консоль.

let person = { name: "Aizhamal", age: 18 };
let personExtended = { ...person, city: "Bishkek" };

console.log(personExtended);
