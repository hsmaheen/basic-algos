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

  insertLast(data) {
    const newNode: Node = {
      data: data,
      next: null
    };
    const node = this.getLast();
    if (node) {
      node.next = newNode;
    } else {
      this.head = newNode;
    }
  }

  getAt(index: number) {
    let node = this.head;
    let counter = 0;
    while (node) {
      if (counter === index) {
        return node;
      }
      node = node.next;
      counter++;
    }
    return null;
  }

  removeAt(index: number) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
    } else if (index > 0) {
      const prevNode = this.getAt(index - 1);
      if (!prevNode || !prevNode.next) {
        return;
      }
      prevNode.next = prevNode.next ? prevNode.next.next : null;
    }

    /*
    alternate solution
    if (index >= 0) {
      if (index === 0) {
        this.head = this.head ? this.head.next : null;
      }
      const node = this.getAt(index - 1);
      if (node) {
        node.next = node.next ? node.next.next : null;
      }
    }
    */
  }

  insertAt(data: any, index: number) {
    const newNode = new Node(data);
    if (index === 0) {
      const nextNode = this.head;
      if (nextNode) {
        this.head = newNode;
        newNode.next = nextNode;
      } else {
        this.head = newNode;
      }
      return;
    }
    if (index > 0) {
      const nodeToAttachTo = this.getAt(index - 1);
      if (!nodeToAttachTo) {
        const lastNode = this.getLast();
        lastNode.next = newNode;
        return;
      }
      const nodeToMove = nodeToAttachTo.next;
      nodeToAttachTo.next = newNode;
      newNode.next = nodeToMove;
    }

    // const newNode = new Node(data);
    // if (index === 0) {
    //   const nextNode = this.head;
    //   if (nextNode) {
    //     this.head = newNode;
    //     newNode.next = nextNode;
    //   } else {
    //     this.head = newNode;
    //   }
    //   return;
    // }
    // if (index > 0) {
    //   const nodeToAttachTo = this.getAt(index - 1);
    //   if (!nodeToAttachTo) {
    //     const lastNode = this.getLast();
    //     lastNode.next = newNode;
    //     return;
    //   }
    //   const nodeToMove = nodeToAttachTo.next;
    //   nodeToAttachTo.next = newNode;
    //   newNode.next = nodeToMove;
    // }
  }
}
