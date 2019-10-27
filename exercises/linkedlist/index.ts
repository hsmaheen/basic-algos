// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

export class Node {
  data: any;
  next: Node;
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList {
  head: Node;
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    while (node) {
      if (node.next === null) {
        return node;
      }
      node = node.next;
    }
    return null;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let prevNode = this.head;
    let currentNode = this.head.next;

    while (currentNode.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    prevNode.next = null;

    //alternate Solution
    // if (this.head) {
    //   let node = this.head;
    //   let nextNode: Node = null;

    //   while (node) {
    //     nextNode = node.next;
    //     if (nextNode.next === null) {
    //       node.next = null;
    //       return;
    //     }
    //     node = nextNode;
    //   }
    // }
  }
}

const l = new LinkedList();
l.insertFirst("a");
l.removeLast();
