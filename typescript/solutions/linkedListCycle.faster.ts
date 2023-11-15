import { ListNode } from "../classes/ListNode";

const isInList = (head: ListNode, nodesList: Set<ListNode>): boolean =>
  nodesList.has(head);

export function hasCycle(head: ListNode | null): boolean {
  let nodeList = new Set<ListNode>([]);
  while (1) {
    if (!head?.next) return false;
    if (isInList(head, nodeList)) return true;
    else nodeList.add(head);
    head = head.next;
  }
}
