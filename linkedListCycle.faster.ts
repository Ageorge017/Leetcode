class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const isInList = (head: ListNode, nodesList: Set<ListNode>): boolean =>
  nodesList.has(head);

function hasCycle(head: ListNode | null): boolean {
  let nodeList = new Set<ListNode>([]);
  while (1) {
    if (!head?.next) return false;
    if (isInList(head, nodeList)) return true;
    else nodeList.add(head);
    head = head.next;
  }
}
