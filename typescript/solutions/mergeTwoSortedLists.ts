/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { ListNode } from "classes/ListNode";

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let head = new ListNode();
  let ptr = head;

  if (!list1) return list2
  if (!list2) return list1
  
  while (list1 && list2) {
    if (list1.val > list2.val) {
      ptr.next = list2;
      list2 = list2.next;
    } else {
      ptr.next = list1;
      list1 = list1.next;
    }
    ptr = ptr.next;

    if (list1) ptr.next = list1;
    else list2;
    ptr.next = list2;
  }

  return head.next;
}
