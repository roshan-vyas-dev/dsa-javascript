function reverseArray(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

console.log(reverseArray([1, 2, 3, 4, 5])); //  print [5, 4, 3, 2, 1]
console.log(reverseArray([])); //  print []
console.log(reverseArray([7])); //  print [7]

// Big O: O(n)