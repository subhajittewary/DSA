class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // O(1) time complexity
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  insertAtIndex(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    const node = new Node(value);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let prevPointer = this.head;
      for (let i = 0; i < index - 1; i++) {
        prevPointer = prevPointer.next;
      }
      node.next = prevPointer.next;
      prevPointer.next = node;
    }
    this.size++;
  }

  removeFromIndex(index) {
    if (index < 0 || index >= this.size) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let prevPointer = this.head;
      for (let i = 0; i < index - 1; i++) {
        prevPointer = prevPointer.next;
      }
      let removedItem = prevPointer.next;
      prevPointer.next = removedItem.next;
    }
    this.size--;
  }

  // O(n) time complexity
  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  getSize() {
    console.log(this.size);
    return this.size;
  }

  printNodes() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Example usage:
const list = new LinkedList();
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.insertAtIndex(25, 2);

// Expected output: 30, 20, 25, 15, 10
list.printNodes();