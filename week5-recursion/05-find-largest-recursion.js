function findLargest(arr) {
  // Base case: only one number left
  if (arr.length === 1) {
    return arr[0];
  }

  // Get the largest number from the smaller array
  const largestInRest = findLargest(arr.slice(0, -1));

  // Get the last number
  const lastNumber = arr[arr.length - 1];

  // Return the bigger number
  return Math.max(largestInRest, lastNumber);
}

// Time Complexity: O(n^2) because slice() copies parts of the array
// Space Complexity: O(n^2) due to recursive calls and sliced arrays

console.log(findLargest([3, 8, 2, 6])); // 8
console.log(findLargest([5, 1, 9]));    // 9
console.log(findLargest([7]));          // 7
console.log(findLargest([-5, -2, -9])); // -2