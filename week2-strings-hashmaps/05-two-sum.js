function twoSum(arr, target) {
  const seen = {};

  for (let i = 0; i < arr.length; i++) {
    const needed = target - arr[i];
    if (needed in seen) {
      return [seen[needed], i];
    }
    seen[arr[i]] = i;
  }
  return null;
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 5, 8], 13)); // [1, 2]
console.log(twoSum([1, 2], 10)); // null

// Big O (time): O(n)
// Extra memory (space): O(n), because seen can store every number