function isSorted(arr) {

  if(arr.length<=1){
    return true;
  }

  if(arr[0]>arr[1]){
    return false;
  }

  return isSorted(arr.slice(1));

}

console.log(isSorted([1, 2, 3, 4])); // true
console.log(isSorted([1, 3, 2, 4])); // false
console.log(isSorted([5, 6, 7]));    // true
console.log(isSorted([5]));          // true
console.log(isSorted([]));           // true

// Time Complexity: O(n²) because slice() copies arrays
// Space Complexity: O(n²) due to sliced arrays held during recursion