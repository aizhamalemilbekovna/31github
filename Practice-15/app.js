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
