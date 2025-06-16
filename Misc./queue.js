//has linear time complexity O(n) and space complexity O(n) where n is the number of elements in the queue.
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return "No elements in Queue";
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  printQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) str += this.items[i] + " ";
    console.log(str);
    return str;
  }
}

//has O(1) time complexity and O(n) space complexity where n is the number of elements in the queue.
class OptimezedQueue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.items[this.rear] = value;
    this.rear++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    delete this.items[this.front];
    this.front++;
  }

  print() {
    console.log(this.items);
  }

  pick() {
    if (this.isEmpty()) {
      return null;
    }
    const pickedElement = this.items[this.front];
    console.log("Picked Element: ", pickedElement);
    return pickedElement;
  }

  isEmpty() {
    if (this.front === this.rear) {
      console.log("Empty Queue");
      return true;
    }
    return false;
  }
}

//has O(1) time complexity and O(n) space complexity where n is the number of elements in the queue.
class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.front = -1;
    this.rear = -1;
  }

  // Check if the queue is full
  isFull() {
    return this.capacity === this.currentLength;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.currentLength === 0;
  }

  // Add an element to the queue
  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    } else {
      console.log("Queue is full");
    }
  }

  // Remove an element from the queue
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }

    const element = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return element;
  }

  // Peek at the front element without removing it
  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  // Print the queue elements
  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let result = "";
      for (let i = 0; i < this.capacity; i++) {
        if (this.items[i] !== null) {
          result += this.items[i] + " ";
        }
      }
      console.log(result.trim());
    }
  }
}
