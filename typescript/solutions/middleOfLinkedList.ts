import { ListNode } from "classes/ListNode";

export function middleNode(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }
  let counter = 1;
  let ptr = head;

  while (ptr) {
    ptr = ptr.next;
    counter++;
  }
  ptr = head;
  const halfway = Math.ceil(counter / 2);
  counter = 1;

  while (counter < halfway) {
    ptr = ptr.next;
    counter++;
  }
  return ptr;
}
