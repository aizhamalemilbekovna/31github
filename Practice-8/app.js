// 8-day

// 1. Создайте функцию calculateFactorial, которая принимает положительное
// целое число в качестве аргумента и возвращает его факториал.
// Протестируйте функцию с различными значениями.

function calculateFactorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * calculateFactorial(num - 1);
  }
}

console.log(calculateFactorial(5)); // 5! = 120

// 2. Создайте объект bankAccount с ключами balance и withdraw.
// Создайте метод withdrawMoney, который принимает сумму и вычитает ее из баланса.
// Протестируйте метод.

let bankAccount = {
  balance: 1000,
  withdrawMoney: function (amount) {
    this.balance -= amount;
    return "Withdrawal successful. New balance: " + this.balance;
  },
};

console.log(bankAccount.withdrawMoney(200)); // New balance: 800

// 3. Создайте массив names с именами различных людей.
// Создайте функцию filterShortNames, которая принимает
// массив имен и возвращает новый массив, содержащий только имена,
// длина которых меньше 6 символов. Протестируйте функцию.

let names = ["Aizhamal", "Madina", "Jandos", "Klara", "Iman"];

function filterShortNames(names) {
  return names.filter((name) => name.length < 6);
}

console.log(filterShortNames(names));

// 4. Создайте переменную text со строковым значением.
// Создайте функцию countWords, которая принимает текст и возвращает
// количество слов в тексте. Протестируйте функцию.

let text = "This is a sample text with several words. My name is Aizhamal";

function countWords(text) {
  let words = text.split(" ");
  return words.length;
}

console.log(countWords(text)); // 12

// 5. Создайте функцию findLongestWord, которая принимает строку
// и возвращает самое длинное слово в строке. Протестируйте функцию.

function findLongestWord(str) {
  let words = str.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

let sentence = "Find the longest word in this sentence.";
console.log(findLongestWord(sentence)); // "longest"

// 6. Создайте функцию reverseString, которая принимает строку
// в качестве аргумента и возвращает ее в обратном порядке.
// Протестируйте функцию.

function reverseString(str) {
  return str.split("").reverse().join("");
}

let originalString = "Hello, World!";
console.log(reverseString(originalString)); // "!dlroW ,olleH"

// 7. Создайте массив grades с оценками студентов.
// Создайте функцию calculateAverageGrade, которая принимает массив оценок
// и возвращает среднюю оценку. Протестируйте функцию.

let grades = [85, 90, 78, 92, 88];

function calculateAverageGrade(grades) {
  let sum = grades.reduce((acc, grade) => acc + grade, 0);
  return sum / grades.length;
}

console.log(calculateAverageGrade(grades)); // 86.6

// 8. Создайте функцию findEvenNumbers, которая принимает массив чисел
// и возвращает новый массив, содержащий только четные числа.
// Протестируйте функцию.

function findEvenNumbers(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(findEvenNumbers(numbersArray)); // [2, 4, 6, 8]

// 9. Создайте функцию isPrime, которая принимает число в качестве аргумента
// и возвращает true, если число является простым, и false в противном случае.
// Протестируйте функцию.

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(17)); // true
console.log(isPrime(20)); // false

// 10. Создайте объект person с ключами name и age. Создайте функцию validatePerson,
// которая принимает объект person и проверяет, содержит ли он оба ключа.
// Верните true, если оба ключа присутствуют, и false в противном случае.
// Протестируйте функцию.

let person = { name: "Aizhamal", age: 19 };

function validatePerson(person) {
  return "name" in person && "age" in person;
}

console.log(validatePerson(person)); // true
