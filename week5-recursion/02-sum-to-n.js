// Time Complexity: O(n)
// Space Complexity: O(n) auxiliary space due to recursive calls

function sumTo(n) {
  if (n === 1) {
    return 1;
  }

  return n + sumTo(n-1);

}



console.log(sumTo(5)); // 15
console.log(sumTo(3)); // 6
console.log(sumTo(2)); // 3
console.log(sumTo(1)); // 1