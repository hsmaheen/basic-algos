import { Node } from "./node";

// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

export function levelWidth(root: Node) {
  const counter = [0];
  if (!root) {
    return counter;
  }
  const arr = [root, "s"];

  while (arr.length > 1) {
    if (arr[0] === "s") {
      counter.push(0);
      arr.shift();
      arr.push("s");
    }
    const node = arr.shift() as Node;
    arr.push(...node.children);

    counter[counter.length - 1]++;
  }
  return counter;
}
