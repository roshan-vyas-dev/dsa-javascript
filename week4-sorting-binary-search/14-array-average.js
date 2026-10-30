// Time Complexity: O(n)
// Space Complexity: O(1) auxiliary space


function findAverage(arr) {

   
  if(arr.length===0){
    return 0;
  }
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let average = sum / arr.length;

  return average;
}

console.log(findAverage([10, 20, 30, 40])); // 25
console.log(findAverage([5, 10, 15]));      // 10
console.log(findAverage([7]));             // 7
console.log(findAverage([]));              // 0