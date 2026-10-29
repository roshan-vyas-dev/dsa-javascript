// Time Complexity: O(n)
// Space Complexity: O(1) auxiliary space


function findSmallest(arr) {
  if (arr.length === 0) {
    return null;
  }
  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}

console.log(findSmallest([12, 45, 7, 89, 23])); // 7
console.log(findSmallest([5, 2, 1])); // 1
console.log(findSmallest([-10, -3, -20])); // -20
console.log(findSmallest([7])); // 7
console.log(findSmallest([])); // null
