function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([2, 4, 6, 8])); // 20
console.log(sumArray([1, 2, 3]));   // 6
console.log(sumArray([5]));         // 5
console.log(sumArray([]));          // 0


// Time Complexity: O(n²) because slice() copies arrays.
// Space Complexity: O(n²) due to sliced arrays held during recursion.