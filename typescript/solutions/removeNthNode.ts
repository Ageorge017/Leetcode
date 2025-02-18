import { ListNode } from "classes/ListNode";

export function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  if (head === null || (head.next === null && n === 1)) return null;
  if (head.next === null && n === 0) return head;

  const listNodeMap: Record<number, ListNode> = {};

  let indexCounter = 0;
  let exitLoop = false;
  let current = head;

  while (!exitLoop) {
    listNodeMap[indexCounter] = current;
    indexCounter += 1;
    if (current.next !== null) {
      current = current.next;
    } else {
      exitLoop = true;
    }
  }

  const linkedListLength = Object.keys(listNodeMap).length;

  if (linkedListLength === n) return head.next;

  const nodeRemovedIndex = linkedListLength - n;
  const nodeBeforeNth = listNodeMap[nodeRemovedIndex - 1];
  const nodeAfterNth = listNodeMap?.[nodeRemovedIndex + 1] || null;
  nodeBeforeNth.next = nodeAfterNth;

  return head;
}
