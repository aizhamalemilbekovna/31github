
// Задача: Поиск максимального элемента в массиве

function findMaxElement(numbers) {
  let max = numbers[0]; 

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i]; 
    }
  }

  return max;
}

let numbersArray = [10, 5, 8, 20, 15];
console.log(findMaxElement(numbersArray)); 
