function reverseQueue(queue) {
  const stack = [];

  while (queue.length > 0) {
    stack.push(queue.shift());
  }

  while (stack.length > 0) {
    queue.push(stack.pop());
  }

  return queue;
}

console.log(reverseQueue([10, 20, 30, 40]));
console.log(reverseQueue([1, 2, 3]));
console.log(reverseQueue([]));

// Time Complexity: O(n)
// Space Complexity: O(n)