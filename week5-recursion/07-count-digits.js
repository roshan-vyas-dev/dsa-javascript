function countDigits(n) {
  if (n < 10) {
    return 1;
  }

  return 1 + countDigits(Math.floor(n / 10));
}
// Time Complexity: O(log n)
// Space Complexity: O(log n) due to recursive calls  

console.log(countDigits(1234)); // 4
console.log(countDigits(56));   // 2
console.log(countDigits(7));    // 1