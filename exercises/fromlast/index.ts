import { LinkedList } from "./linkedlist";

// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

export function fromLast(list: LinkedList, n: number) {
  if (!list.head) {
    return null;
  }

  let slowNode = list.head;
  let fastNode = list.head;

  while (n > 0) {
    fastNode = fastNode.next;
    n--;
  }

  while (fastNode.next) {
    fastNode = fastNode.next;
    slowNode = slowNode.next;
  }

  return slowNode;

  // Alternate solution
  //let counter = 0;
  //   while (counter < n && fastNode) {
  //     console.log("TCL: fromLast -> counter", counter);
  //     fastNode = fastNode.next;
  //     counter++;
  //   }

  //   if (fastNode) {
  //     while (fastNode.next) {
  //       slowNode = slowNode.next;
  //       fastNode = fastNode.next;
  //     }
  //     return slowNode;
  //   }

  return null;
}
