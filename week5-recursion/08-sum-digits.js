function sumDigits(n) {
  if (n < 10) {
    return n;
  }

  return n%10 + sumDigits(Math.floor(n/10));

}

// Time Complexity: O(log n)
// Space Complexity: O(log n) due to recursive calls

console.log(sumDigits(1234)); // 10
console.log(sumDigits(56));   // 11
console.log(sumDigits(7));    // 7
console.log(sumDigits(0));    // 0