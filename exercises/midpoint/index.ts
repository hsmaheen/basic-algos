import { LinkedList } from "./linkedlist";

// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

export function midpoint(list: LinkedList) {
  //my solution
  if (!list.head) {
    return null;
  }
  let lastNode = list.head;
  let midNode = list.head;

  while (lastNode.next && lastNode.next.next) {
    midNode = midNode.next;
    lastNode = lastNode.next.next;
  }

  return midNode;
  //alternate solution
  //   while (midNode) {
  //     if (!lastNode || !lastNode.next) {
  //       return midNode;
  //     }

  //     lastNode = lastNode.next.next;
  //     if (lastNode) {
  //       midNode = midNode.next;
  //     }
  //   }
}
