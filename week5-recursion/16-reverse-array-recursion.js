function reverseArray(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  return reverseArray(arr.slice(1)).concat(arr[0]);
}

// Time Complexity: O(n²) because slice() and concat() copy arrays.
// Space Complexity: O(n²) due to temporary arrays and recursion.

console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]
console.log(reverseArray([5, 6, 7]));   // [7, 6, 5]
console.log(reverseArray([9]));         // [9]
console.log(reverseArray([]));          // []