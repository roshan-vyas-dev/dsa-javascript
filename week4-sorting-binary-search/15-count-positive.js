// Time Complexity: O(n)
// Space Complexity: O(1) auxiliary space
function countPositive(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if(arr[i]>0){
      count++;
    }
  }

  return count;
} 


console.log(countPositive([10, -5, 20, -3, 0])); // 2
console.log(countPositive([1, 2, 3]));           // 3
console.log(countPositive([-1, -2, -3]));        // 0
console.log(countPositive([0, 0, 0]));           // 0
console.log(countPositive([]));                  // 0