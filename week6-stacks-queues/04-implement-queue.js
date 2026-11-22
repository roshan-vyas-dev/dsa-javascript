class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;

}
}

const queue = new Queue();

queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");

console.log(queue.front());    // A
console.log(queue.dequeue());  // A
console.log(queue.size());     // 2
console.log(queue.isEmpty());  // false

queue.dequeue();
queue.dequeue();

console.log(queue.isEmpty());  // true
console.log(queue.size());     // 0


// Time Complexity:
// enqueue(): O(1) amortized
// dequeue(): O(n) because shift() moves remaining elements
// front(): O(1)
// isEmpty(): O(1)
// size(): O(1)

// Space Complexity: O(n)