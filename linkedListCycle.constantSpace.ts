class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;
  let rabbit: ListNode | null = head;
  let tortoise: ListNode | null = head;
  while (rabbit && rabbit.next) {
    rabbit = rabbit.next.next;
    tortoise = tortoise.next;
    if (rabbit === tortoise) return true;
  }
  return false;
}
