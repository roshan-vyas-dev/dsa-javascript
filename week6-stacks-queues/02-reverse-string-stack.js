
function reverseString(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  let reversed = "";

  while (stack.length > 0) {
    reversed = reversed + stack.pop();
  }

  return reversed;
}

// Time Complexity: O(n)
// Space Complexity: O(n)

console.log(reverseString("hello"));
console.log(reverseString(""));
console.log(reverseString("a"));
console.log(reverseString("roshan"));