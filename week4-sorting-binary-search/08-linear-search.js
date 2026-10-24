function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i]===target){
      return i;
      
    }
  }
  return -1;
}

console.log(linearSearch([8, 4, 12, 6, 10], 12)); // 2
console.log(linearSearch([8, 4, 12, 6, 10], 8));  // 0
console.log(linearSearch([8, 4, 12, 6, 10], 10)); // 4
console.log(linearSearch([8, 4, 12, 6, 10], 15)); // -1
console.log(linearSearch([], 10));                 // -1

// Time Complexity: O(n) worst case, O(1) best case
// Space Complexity: O(1) auxiliary space