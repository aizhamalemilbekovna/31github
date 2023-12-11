// 9-day

// 1. Создайте функцию calculateAreaOfTriangle, которая принимает основание
// и высоту треугольника в качестве аргументов и возвращает его площадь.
// Протестируйте функцию с разными значениями.

function calculateAreaOfTriangle(base, height) {
  return 0.5 * base * height;
}

console.log(calculateAreaOfTriangle(5, 8)); // 20

// 2. Создайте объект student с ключами name, grades (массив оценок).
// Создайте функцию calculateAverageGrade, которая принимает объект
// student и возвращает среднюю оценку. Протестируйте функцию.

let student = {
  name: "Aizhamal",
  grades: [85, 90, 78, 92, 88],
};

function calculateAverageGrade(student) {
  let sum = student.grades.reduce((acc, grade) => acc + grade, 0);
  return sum / student.grades.length;
}

console.log(calculateAverageGrade(student)); // 86.6

// 3. Создайте функцию capitalizeFirstLetter, которая принимает строку
// в качестве аргумента и возвращает строку, в которой первая буква каждого
// слова заглавная. Протестируйте функцию.

function capitalizeFirstLetter(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

let sentence = "hello world";
console.log(capitalizeFirstLetter(sentence)); // "Hello World"

// 4. Создайте массив numbers с числами. Создайте функцию findSmallestNumber,
// которая принимает массив чисел и возвращает самое маленькое число в массиве.
// Протестируйте функцию.

function findSmallestNumber(numbers) {
  return Math.min(...numbers);
}

let numbersArray = [10, 5, 8, 20, 15];
console.log(findSmallestNumber(numbersArray)); // 5

// 5. Создайте объект book с ключами title, author и pages.
// Создайте функцию printBookInfo, которая принимает объект book
// и выводит информацию о книге в формате "Название: [title],
// Автор: [author], Количество страниц: [pages]". Протестируйте функцию.

let book = {
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
  pages: 176,
};

function printBookInfo(book) {
  console.log(
    "Название: " +
      book.title +
      ", Автор: " +
      book.author +
      ", Количество страниц: " +
      book.pages
  );
}

printBookInfo(book);

// 6. Создайте функцию isPalindrome, которая принимает строку
// в качестве аргумента и возвращает true, если строка является
// палиндромом (читается одинаково слева направо и справа налево),
// и false в противном случае. Протестируйте функцию.

function isPalindrome(str) {
  let cleanedStr = str.toLowerCase().replace(/[^a-z]/g, "");
  let reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // true

// 7. Создайте функцию getSquareNumbers, которая принимает массив
// чисел и возвращает новый массив, содержащий квадраты каждого числа
// из исходного массива. Протестируйте функцию.

function getSquareNumbers(numbers) {
  return numbers.map((number) => number * number);
}

let originalNumbers = [1, 2, 3, 4, 5];
console.log(getSquareNumbers(originalNumbers)); // [1, 4, 9, 16, 25]

// 8. Создайте функцию calculateGCD, которая принимает два числа
// в качестве аргументов и возвращает их наибольший общий делитель.
// Протестируйте функцию.

function calculateGCD(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return Math.abs(a);
}

console.log(calculateGCD(48, 18)); // 6

// 9. Создайте объект movie с ключами title, director и year.
// Создайте функцию printMovieInfo, которая принимает объект movie
// и выводит информацию о фильме в консоль. Протестируйте функцию.

let movie = {
  title: "The Shawshank Redemption",
  director: "Frank Darabont",
  year: 1994,
};

function printMovieInfo(movie) {
  console.log(
    "Title: " +
      movie.title +
      ", Director: " +
      movie.director +
      ", Year: " +
      movie.year
  );
}

printMovieInfo(movie);

// 10. Создайте функцию generateRandomNumber, которая принимает диапазон
// (минимальное и максимальное значения) в качестве аргумента и возвращает
// случайное число в этом диапазоне. Протестируйте функцию.

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(generateRandomNumber(1, 10)); // случайное число от 1 до 10
