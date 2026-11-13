function countEven(arr) {
  if (arr.length === 0) {
    return 0;
  }

  if (arr[0] % 2 == 0) {
    return 1 + countEven(arr.slice(1));
  }

  return countEven(arr.slice(1));


}

console.log(countEven([2, 5, 8, 3, 6])); // 3
console.log(countEven([1, 3, 5]));      // 0
console.log(countEven([2, 4, 6]));      // 3
console.log(countEven([]));             // 0

// Time Complexity: O(n²) because slice() copies arrays.
// Space Complexity: O(n²) due to sliced arrays and recursion.