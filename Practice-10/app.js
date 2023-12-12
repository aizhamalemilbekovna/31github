// 10-day

// 1. Создайте функцию findMaxElement, которая принимает массив чисел
//  и возвращает максимальное число в массиве. Протестируйте функцию.

function findMaxElement(numbers) {
  return Math.max(...numbers);
}

let numbersArray = [10, 5, 8, 20, 15];
console.log(findMaxElement(numbersArray)); // 20

// 2. Создайте объект car с ключами brand, model и year.
// Создайте функцию displayCarInfo, которая принимает объект
// car и выводит информацию о машине в консоль. Протестируйте функцию.

let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
};

function displayCarInfo(car) {
  console.log(
    "Brand: " + car.brand + ", Model: " + car.model + ", Year: " + car.year
  );
}

displayCarInfo(car);

// 3. Создайте функцию removeDuplicates, которая принимает массив строк
// и возвращает новый массив, не содержащий повторяющихся строк.
// Протестируйте функцию.

function removeDuplicates(strings) {
  return Array.from(new Set(strings));
}

let stringArray = ["apple", "banana", "apple", "orange", "banana"];
console.log(removeDuplicates(stringArray)); // ["apple", "banana", "orange"]

// 4. Создайте функцию calculateCircumference, которая принимает радиус круга
// в качестве аргумента и возвращает его длину. Протестируйте функцию.

function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}

console.log(calculateCircumference(5)); // 31.41592653589793

// 5. Создайте функцию reverseWords, которая принимает строку
// в качестве аргумента и возвращает новую строку, в которой порядок слов обратный.
// Протестируйте функцию.

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

let sentence = "Hello World, how are you?";
console.log(reverseWords(sentence)); // "you? are how World, Hello"
