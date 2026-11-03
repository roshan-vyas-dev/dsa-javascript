// Time Complexity: O(n)
// Space Complexity: O(n) auxiliary space

function reverseString(str) {
  if (str.length <= 1) {
    return str;
  }

  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("ros"));   // "sor"
console.log(reverseString("a"));     // "a"
console.log(reverseString(""));      // ""
