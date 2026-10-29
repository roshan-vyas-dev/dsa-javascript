// Time Complexity: O(n)
// Space Complexity: O(1) auxiliary space

function countEvenNumbers(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }

  return count;
}

console.log(countEvenNumbers([1, 2, 3, 4, 5, 6])); // 3
console.log(countEvenNumbers([1, 3, 5]));          // 0
console.log(countEvenNumbers([2, 4, 6]));          // 3
console.log(countEvenNumbers([]));                 // 0
console.log(countEvenNumbers([-2, -3, 0, 4]));     // 3