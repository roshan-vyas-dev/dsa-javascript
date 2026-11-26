class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2.pop();
  }

  isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }

  size() {
    return this.stack1.length + this.stack2.length;
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.size());
console.log(queue.isEmpty());

queue.dequeue();

console.log(queue.isEmpty());

// Time Complexity:
// enqueue(): O(1)
// dequeue(): O(n) amortized
// isEmpty(): O(1)
// size(): O(1)

// Space Complexity: O(n)