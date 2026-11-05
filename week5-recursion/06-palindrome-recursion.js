function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }

  if(str[0]!==str[str.length-1]){
    return false;
  }

    return isPalindrome(str.slice(1, -1));
}


// Time Complexity: O(n)
// Space Complexity: O(n) due to recursive calls

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("a"));     // true
console.log(isPalindrome(""));      // true