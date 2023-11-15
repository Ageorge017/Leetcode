import { ListNode } from "../classes/ListNode";

const isInList = (head: ListNode, nodesList: ListNode[]): boolean =>
  nodesList.includes(head);

export function hasCycle(head: ListNode | null): boolean {
  let nodeList: ListNode[] = [];
  // of course we wouldn't do this in real life
  while (1) {
    if (!head?.next) return false;
    if (isInList(head, nodeList)) return true;
    else nodeList.push(head);
    head = head.next;
  }
}
