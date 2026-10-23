function binarySearch(arr, target) {
  let low =0;
  let high = arr.length-1;

  while(low<=high){
    let mid = Math.floor((low+high)/2);

     if (arr[mid] === target) {
      return mid;
    } else if (target > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }


  }
  return -1;


}

console.log(binarySearch([10, 20, 30, 40, 50], 30)); // 2
console.log(binarySearch([10, 20, 30, 40, 50], 10)); // 0
console.log(binarySearch([10, 20, 30, 40, 50], 50)); // 4
console.log(binarySearch([10, 20, 30, 40, 50], 35)); // -1
console.log(binarySearch([], 10));                   // -1

// Time Complexity: O(log n)
// Space Complexity: O(1) auxiliary space — iterative implementation