function findMissingNumbersSorted(sortedNums) {
  let missingNumbers = [];

  for (let i = 0; i < sortedNums.length - 1; i++) {
    let current = sortedNums[i];
    let next = sortedNums[i + 1];
    if (next - current > 1) {
      for (let j = current + 1; j < next; j++) {
        missingNumbers.push(j);
      }
    }
  }

  return missingNumbers;
}

let sortedArrayWithMissingNumbers = [1, 2, 3, 4, 6, 7, 8, 9, 11];
console.log(findMissingNumbersSorted(sortedArrayWithMissingNumbers)); 

function reverseInteger(x) {
  const reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);

  if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) {
    return 0;
  }

  return reversed;
}

let num = 123;
console.log(reverseInteger(num)); 

function isValidParentheses(s) {
  const stack = [];
  const mapping = { ')': '(', '}': '{', ']': '[' };

  for (let char of s) {
    if (char in mapping) {
      const topElement = stack.pop() || '#';
      if (mapping[char] !== topElement) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

let parenthesesString = "()[]{}";
console.log(isValidParentheses(parenthesesString)); 

function findGCD(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return Math.abs(a);
}

function findLCM(a, b) {
  if (a === 0 || b === 0) {
    return 0; 
  }
  const gcd = findGCD(a, b);
  return Math.abs(a * b) / gcd;
}

console.log(findLCM(4, 6));


// Сделайте функцию, которая вернет текущий день недели словом.

function getCurrentDayOfWeek() {
  const currentDate = new Date();

  const currentDayOfWeek = currentDate.getDay();

  const daysOfWeek = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ];

  return daysOfWeek[currentDayOfWeek];
}

const currentDay = getCurrentDayOfWeek();
console.log(`Сегодня ${currentDay}`);

// Сделайте функцию, которая будет возвращать сколько дней осталось до конца текущего месяца.

function daysUntilEndOfMonth() {
  const currentDate = new Date();

  const currentMonth = currentDate.getMonth();

  const nextMonth = new Date(currentDate);
  nextMonth.setMonth(currentMonth + 1, 1);
  nextMonth.setHours(0, 0, 0, 0);

  const millisecondsInDay = 24 * 60 * 60 * 1000;
  const daysRemaining = Math.floor(
    (nextMonth - currentDate) / millisecondsInDay
  );

  return daysRemaining;
}

const remainingDays = daysUntilEndOfMonth();
console.log(`До конца текущего месяца осталось ${remainingDays} дней.`);
