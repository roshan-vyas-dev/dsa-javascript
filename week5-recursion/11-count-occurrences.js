function countOccurrences(arr, target) {
  if (arr.length === 0) {
    return 0;
  }

  if (arr[0] === target) {
    return 1 + countOccurrences(arr.slice(1), target);
  }

  return countOccurrences(arr.slice(1), target);
}

// Time Complexity: O(n²) because slice() copies arrays
// Space Complexity: O(n²) due to recursive calls and sliced arrays

console.log(countOccurrences([2, 5, 2, 8, 2], 2)); // 3
console.log(countOccurrences([1, 3, 4], 3));       // 1
console.log(countOccurrences([1, 2, 3], 7));       // 0
console.log(countOccurrences([], 2));              // 0