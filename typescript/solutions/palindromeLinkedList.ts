import { ListNode } from "classes/ListNode";

export function isPalindrome(head: ListNode | null): boolean {
  const nodeList: number[] = [];
  let nodePtr = head;

  while (nodePtr) {
    nodeList.push(nodePtr.val);
    nodePtr = nodePtr.next;
  }

  let tailPtr = nodeList.length - 1;
  let headPtr = 0;

  while (tailPtr > headPtr) {
    if (nodeList[tailPtr] !== nodeList[headPtr]) {
      return false;
    }
    tailPtr--;
    headPtr++;
  }

  return true;
}
