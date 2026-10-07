function findSmallest(arr) {
  if (arr.length === 0) {
    return null;
  }

  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

console.log(findSmallest([3, 9, 2, 15, 7])); //  print  2
console.log(findSmallest([-5, -1, -8])); // print   -8
console.log(findSmallest([])); // null

// Big O: O(n)
