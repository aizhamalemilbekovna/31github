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
