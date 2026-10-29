
// Time Complexity: O(n)
// Space Complexity: O(1) auxiliary space

function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum+=arr[i]
  }

  return sum;
}

console.log(sumArray([10, 20, 30, 40])); // 100
console.log(sumArray([1, 2, 3]));       // 6
console.log(sumArray([-1, 5, -2]));     // 2
console.log(sumArray([7]));              // 7
console.log(sumArray([]));               // 0