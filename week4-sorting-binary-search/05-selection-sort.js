function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

console.log(selectionSort([7, 4, 6, 2]));   //[ 2, 4, 6, 7 ]
console.log(selectionSort([1, 2, 3, 4]));//[ 1, 2, 3, 4 ]
console.log(selectionSort([5, 4, 3, 2, 1]));//[ 1, 2, 3, 4, 5 ]
console.log(selectionSort([]));//[]
console.log(selectionSort([7]));//[ 7 ]

// Time Complexity: O(n²)
// Space Complexity: O(1)