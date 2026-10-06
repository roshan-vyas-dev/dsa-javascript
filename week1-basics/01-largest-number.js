function findLargest(arr) {
  let largest = arr[0];

  for(let i=1;i<arr.length;i++){
    if(arr[i]>largest){
      largest=arr[i]
    }
  }
  return largest;
}

console.log(findLargest([3, 9, 2, 15, 7])); //  print 15
console.log(findLargest([-5, -1, -8]));     // print  -1


// Big O: O(n)
