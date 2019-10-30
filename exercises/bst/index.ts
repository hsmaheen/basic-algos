// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

export class Node {
  data: any;
  left: Node;
  right: Node;
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(newNode) {
    if (newNode > this.data && this.right) {
      this.right.insert(newNode);
    } else if (newNode > this.data) {
      this.right = new Node(newNode);
    } else if (newNode < this.data && this.left) {
      this.left.insert(newNode);
    } else if (newNode < this.data) {
      this.left = new Node(newNode);
    }
  }

  contains(searchData) {
    if (this.data === searchData) {
      return this;
    }
    if (searchData < this.data && this.left) {
      return this.left.contains(searchData);
    } else if (searchData > this.data && this.right) {
      return this.right.contains(searchData);
    }
    return null;
  }
}
