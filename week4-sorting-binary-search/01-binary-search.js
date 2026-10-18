function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    }else{
      right = mid-1;
    }


  }
  return null
}

console.log(binarySearch([1, 3, 5, 7, 9], 7));  // 3
console.log(binarySearch([1, 3, 5, 7, 9], 4));  //  null?
console.log(binarySearch([], 5));               //  null?

// Big O (time): O(log n), the search area is cut in half each step
// Extra memory (space): O(1), only left, right and mid are used
// Works only on a sorted array