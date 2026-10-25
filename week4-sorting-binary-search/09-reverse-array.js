// Time Complexity: O(n)
// Space Complexity: O(1) auxiliary space

function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }

  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(reverseArray([10, 20, 30, 40])); // [40, 30, 20, 10]
console.log(reverseArray([7])); // [7]
console.log(reverseArray([])); // []
console.log(reverseArray([1, 2])); // [2, 1]
