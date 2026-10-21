function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j+1]=key;
  }
  return arr;
}



console.log(insertionSort([5, 2, 4, 1]));    //[ 1, 2, 4, 5 ]
console.log(insertionSort([1, 2, 3, 4, 5])); //[ 1, 2, 3, 4, 5 ]
console.log(insertionSort([5, 4, 3, 2, 1])); //[ 1, 2, 3, 4, 5 ]
console.log(insertionSort([])); //[]
console.log(insertionSort([7])); //[ 7 ]

// Time Complexity: O(n²) worst case, O(n) best case
// Space Complexity: O(1) auxiliary space