function maxWindowSum(arr, k) {
  if (arr.length < k) {
    return null;
  }

  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  let maxSum = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum + arr[i] - arr[i - k];
    if (windowSum > maxSum) {
      maxSum = windowSum;
    }
  }
  return maxSum;
}

console.log(maxWindowSum([2, 1, 5, 1, 3, 2], 3)); // 9
console.log(maxWindowSum([1, 2], 3)); // null

// Big O (time): O(n)
// Extra memory (space): O(1), only windowSum, maxSum and i are used