// 1. Создайте функцию isEvenLength, которая принимает строку
// в качестве аргумента и возвращает true, если длина строки четная,
// и false в противном случае. Протестируйте функцию.

function isEvenLength(str) {
  return str.length % 2 === 0;
}

console.log(isEvenLength("hello")); // false
console.log(isEvenLength("world!")); // true

// 2. Создайте функцию countOccurrences, которая принимает массив чисел
//  и число в качестве аргументов и возвращает количество вхождений числа в массиве.
// Протестируйте функцию.

function countOccurrences(numbers, target) {
  return numbers.filter((number) => number === target).length;
}

let numbersArray = [1, 2, 3, 2, 4, 2, 5];
console.log(countOccurrences(numbersArray, 2)); // 3

// 3. Создайте функцию generateRandomString, которая генерирует случайную строку
// определенной длины. Протестируйте функцию.

function generateRandomString(length) {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

console.log(generateRandomString(8)); // случайная строка длиной 8 символов

// 4. Создайте функцию mergeArrays, которая принимает два массива и возвращает новый массив,
// содержащий элементы обоих массивов. Протестируйте функцию.

function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
console.log(mergeArrays(array1, array2)); // [1, 2, 3, 4, 5, 6]

// 5. Создайте функцию findLongestWordLength, которая принимает строку
// в качестве аргумента и возвращает длину самого длинного слова в строке.
// Протестируйте функцию.

function findLongestWordLength(str) {
  let words = str.split(" ");
  let maxLength = 0;

  for (let word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }

  return maxLength;
}

let sentence = "Find the longest word in this sentence.";
console.log(findLongestWordLength(sentence)); // 9
