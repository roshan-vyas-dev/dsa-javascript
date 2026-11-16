function findSmallest(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  return Math.min(arr[0], findSmallest(arr.slice(1)));
}

console.log(findSmallest([8, 3, 6, 1, 9])); // 1
console.log(findSmallest([5, 2, 7])); // 2
console.log(findSmallest([7])); // 7
console.log(findSmallest([-5, -2, -9])); // -9

// Time Complexity: O(n²) because slice() copies arrays.
// Space Complexity: O(n²) due to sliced arrays held during recursion.