// 5-day

// 1. Создайте функцию isPalindrome, которая принимает строку в качестве аргумента и возвращает true,
// если строка является палиндромом (читается одинаково слева направо и справа налево),
// и false в противном случае. Протестируйте функцию на нескольких строках.

function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("radar"));
console.log(isPalindrome("hello"));

// 2. Создайте объект car с ключами brand, model и year, представляющими марку,
// модель и год выпуска автомобиля. Выведите информацию о машине в консоль в виде предложения.

let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
};

console.log(
  "Мой автомобиль - " + car.brand + " " + car.model + ", " + car.year + " года."
);

// 3. Создайте массив names с именами нескольких людей.
// Используйте метод массива для добавления нового имени в конец массива.
// Выведите обновленный массив в консоль.

let names = ["Alice", "Boby", "Aimira"];
names.push("David");
console.log(names);

// 4. Создайте переменные length и width, представляющие длину и ширину прямоугольника.
// Вычислите площадь прямоугольника (произведение длины на ширину) и выведите результат.

let length = 8;
let width = 5;
let rectangleArea = length * width;
console.log("Площадь прямоугольника: " + rectangleArea);

// 5. Создайте функцию capitalizeFirstLetter, которая принимает строку в качестве аргумента и возвращает строку,
// в которой первая буква каждого слова заглавная. Протестируйте функцию на строке.

function capitalizeFirstLetter(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeFirstLetter("hello world"));

// 6. Создайте переменную temperatureCelsius и присвойте ей числовое значение температуры в градусах Цельсия.
// Преобразуйте эту температуру в градусы Фаренгейта по формуле (C * 9/5) + 32 и выведите результат.

let temperatureCelsius = 20;
let temperatureFahrenheit = (temperatureCelsius * 9) / 5 + 32;
console.log("Температура в градусах Фаренгейта: " + temperatureFahrenheit);

// 7. Создайте массив ages с числовыми значениями возрастов.
// Используйте метод массива для определения максимального и минимального возраста.
// Выведите результат в консоль.

let ages = [25, 30, 18, 40, 22];
let maxAge = Math.max(...ages);
let minAge = Math.min(...ages);
console.log("Максимальный возраст: " + maxAge);
console.log("Минимальный возраст: " + minAge);

// 8. Создайте объект person с ключами name,
// age и gender, представляющими имя, возраст и пол человека.
// Выведите информацию о человеке в консоль.

let person = {
  name: "Johny",
  age: 25,
  gender: "Male",
};

console.log(
  "Имя: " + person.name + ", Возраст: " + person.age + ", Пол: " + person.gender
);

// 9. Создайте функцию calculateFactorial, которая принимает
// число в качестве аргумента и возвращает его факториал.
// Вызовите функцию с числом и выведите результат.

function calculateFactorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * calculateFactorial(number - 1);
  }
}

let factorialResult = calculateFactorial(5);
console.log("Факториал числа 5: " + factorialResult);

// 10. Создайте переменную sentence и присвойте ей строковое значение предложения.
// Используйте метод строки для разделения предложения на массив слов.
// Выведите полученный массив в консоль.

let sentence = "Это простое предложение для примера.";
let wordsArray = sentence.split(" ");
console.log(wordsArray);






























