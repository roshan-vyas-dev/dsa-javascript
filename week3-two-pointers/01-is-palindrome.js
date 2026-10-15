function isPalindrome(word) {
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("")); // true
console.log(isPalindrome("a")); // true

// Big O (time): O(n)
// Extra memory (space): O(1), only left and right are used
