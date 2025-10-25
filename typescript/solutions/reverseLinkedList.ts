import { ListNode } from "../classes/ListNode";

export function reverseList(head: ListNode | null): ListNode | null {
  let dummy = new ListNode();
  let ptr = head;
  let dummyPtr = dummy;

  const nodeList: ListNode[] = [];

  while (ptr) {
    nodeList.push(ptr);
    ptr = ptr.next;
  }

  nodeList.reverse();

  nodeList.forEach((node) => {
    node.next = null;
    dummyPtr.next = node;
    dummyPtr = dummyPtr.next;
  });

  return dummy.next;
}

export function reverseList2(head: ListNode | null): ListNode | null {
  let newNode: ListNode | null = null;

  while (head) {
    let temp = head.next;

    head.next = newNode;
    newNode = head;
    head = temp;
  }

  return newNode;
}
