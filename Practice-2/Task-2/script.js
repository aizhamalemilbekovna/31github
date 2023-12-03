// 2-day

// 1. Объявите переменную и инициализируйте ее строковым значением.
let string = "My name is Aizhamal, I'm learn JS!";
console.log(string);

// 2. Объявите переменную и инициализируйте ее числовым значением.
let number = 100;
let number1 = 50;
console.log(number);
console.log(number1);

// 3. Создайте функцию, которая складывает два числа.
function sum(a, b) {
  return a + b;
}
console.log(sum(5, 8));
console.log(sum(number, number1));

// 4. Создайте массив строк
let colors = ["red", "blue", "green", "pink"];
console.log(colors);

// 5. Доступ к третьему элементу массива, созданного выше.
let thirdColor = colors[2];
console.log(thirdColor);

// 6. Создайте объект с парами ключ-значение.
let person = {
  name: "Aizhamal",
  age: 18,
};
console.log(person);

// 7. Используйте условный оператор, чтобы проверить, является ли число четным или нечетным.
function checkEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkEvenOrOdd(800));

// 8. Создайте цикл for для перебора массива.
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < number.length; i++) {
  console.log(numbers[i]);
}
console.log(numbers);

// 9. Используйте цикл while для печати чисел от 1 до 5.
let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}

console.log(count);

// 10. Создайте функцию, которая принимает на вход строку и возвращает ее длину.
function calculateStringLength(str) {
  return str.length;
}

console.log(calculateStringLength("Aizhamal"));
