// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

export class Node {
  data: any;
  children: Node[];
  constructor(data: any) {
    this.data = data;
    this.children = [];
  }

  add(data: any) {
    const node = new Node(data);
    this.children.push(node);
  }

  remove(data: any) {
    this.children = this.children.filter(el => el.data !== data);
  }
}

export class Tree {
  root: Node;
  constructor() {
    this.root = null;
  }

  traverseBF(fn: Function) {
    const arr = [this.root];
    while (arr.length > 0) {
      const node = arr.shift();
      arr.push(...node.children);
      fn(node);
    }
  }

  traverseDF(fn: Function) {
    let arr = [this.root];

    while (arr.length > 0) {
      const node = arr.shift();
      arr = [...node.children, ...arr];
      fn(node);
    }
  }
}
