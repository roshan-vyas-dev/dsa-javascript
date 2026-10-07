function findLargest(arr) {
  if (arr.length === 0) {
    return null;
  }

  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(findLargest([3, 9, 2, 15, 7])); //  print 15
console.log(findLargest([-5, -1, -8])); // print  -1
console.log(findLargest([])); // null

// Big O: O(n)
