function contains(arr, target) {
  if (arr.length===0) {
    return false;
  }

  if (arr[0]===target) {
    return true;
  }

  return  contains(arr.slice(1),target);
}

console.log(contains([4, 7, 9, 2], 9)); // true
console.log(contains([4, 7, 9, 2], 5)); // false
console.log(contains([3], 3));         // true
console.log(contains([], 5));          // false

// Time Complexity: O(n²) because slice() copies arrays.
// Space Complexity: O(n²) due to sliced arrays and recursion.