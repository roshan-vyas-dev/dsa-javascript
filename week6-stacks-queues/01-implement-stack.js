class Stack {
  constructor() {
    this.items = [];
  }
  push(value) {
    this.items.push(value);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
}

const stack = new Stack();

console.log(stack.isEmpty()); // true

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.size()); // 3
console.log(stack.peek()); // 30
console.log(stack.pop()); // 30
console.log(stack.peek()); // 20
console.log(stack.size()); // 2
console.log(stack.isEmpty()); // false

// Time Complexity:
// push(): O(1) amortized
// pop(): O(1)
// peek(): O(1)
// isEmpty(): O(1)
// size(): O(1)

// Space Complexity: O(n) because we store n items in the stack.