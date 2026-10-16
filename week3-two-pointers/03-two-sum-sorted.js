function twoSumSorted(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [left, right];
    }
    if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return null;
}

console.log(twoSumSorted([1, 2, 4, 7, 11], 9)); // [1, 3]
console.log(twoSumSorted([1, 2, 3], 10)); // null
console.log(twoSumSorted([], 5)); // null
console.log(twoSumSorted([5], 5)); // null

// Big O (time): O(n)
// Extra memory (space): O(1), only left, right and sum are used
