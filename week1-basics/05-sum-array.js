function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([])); // 0
console.log(sumArray([7])); // 7

// Big O: O(n)