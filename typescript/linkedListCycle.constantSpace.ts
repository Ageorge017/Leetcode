import { ListNode } from "./classes/ListNode";

export function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;
  let rabbit: ListNode | null = head;
  let tortoise: ListNode | null = head;
  while (rabbit && rabbit.next && tortoise) {
    rabbit = rabbit.next.next;
    tortoise = tortoise.next;
    if (rabbit === tortoise) return true;
  }
  return false;
}
