// 1. Создайте функцию calculatePower, которая принимает число и степень
// в качестве аргументов и возвращает результат возведения числа в
// указанную степень. Протестируйте функцию.

function calculatePower(base, exponent) {
  return Math.pow(base, exponent);
}

console.log(calculatePower(2, 3)); // 8

// 2. Создайте объект fruit с ключами name, color и taste.
// Создайте функцию printFruitInfo, которая принимает объект fruit
// и выводит информацию о фрукте в консоль. Протестируйте функцию.

let fruit = {
  name: "Apple",
  color: "Red",
  taste: "Sweet",
};

function printFruitInfo(fruit) {
  console.log(
    "Name: " +
      fruit.name +
      ", Color: " +
      fruit.color +
      ", Taste: " +
      fruit.taste
  );
}

printFruitInfo(fruit);

// 3. Создайте функцию removeVowels, которая принимает строку и
// возвращает новую строку без гласных букв. Протестируйте функцию.

function removeVowels(str) {
  return str.replace(/[aeiouAEIOU]/g, "");
}

let sentence = "This is a sample sentence.";
console.log(removeVowels(sentence)); // "Ths s smpl sntnc."

// 4. Создайте функцию calculateAreaOfRectangle, которая принимает ширину
// и высоту прямоугольника в качестве аргументов и возвращает его площадь.
// Протестируйте функцию.

function calculateAreaOfRectangle(width, height) {
  return width * height;
}

console.log(calculateAreaOfRectangle(4, 6)); // 24

// 5. Создайте функцию getUniqueValues, которая принимает массив
// и возвращает новый массив, содержащий только уникальные значения
// из исходного массива. Протестируйте функцию.

function getUniqueValues(array) {
  return Array.from(new Set(array));
}

let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
console.log(getUniqueValues(arrayWithDuplicates)); // [1, 2, 3, 4, 5]
