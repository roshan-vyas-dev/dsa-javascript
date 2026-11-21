function isValid(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // Store opening brackets
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      const last = stack.pop();

      if (
        (char === ")" && last !== "(") ||
        (char === "]" && last !== "[") ||
        (char === "}" && last !== "{")
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Test cases
console.log(isValid("()"));
console.log(isValid("([])"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("((("));

// Time Complexity: O(n)
// Space Complexity: O(n)