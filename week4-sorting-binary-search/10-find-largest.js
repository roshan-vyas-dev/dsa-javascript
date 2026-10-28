// Time Complexity: O(n)
// Space Complexity: O(1) auxiliary space

function findLargest(arr) {
  if (arr.length === 0) {
    return null;
  }
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

console.log(findLargest([12, 45, 7, 89, 23])); // 89
console.log(findLargest([5, 2, 1]));           // 5
console.log(findLargest([-10, -3, -20]));       // -3
console.log(findLargest([7]));                 // 7
console.log(findLargest([]));                  // null