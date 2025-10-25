export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  static createLinkedListFromArray(values: number[]): ListNode | null {
    if (values.length === 0) return null;

    const head = new ListNode(values[0], null);
    let current = head;
    values.shift();

    if (values.length === 0) return head;

    values.forEach((value) => {
      const newNode = new ListNode(value, null);
      current.next = newNode;
      current = newNode;
    }, head);

    return head;
  }
}

export const createListNodes = (nums: number[]): ListNode | null => {
  let dummy = new ListNode();
  let ptr = dummy;

  nums.forEach((num) => {
    const newNode = new ListNode(num);
    ptr.next = newNode;
    ptr = ptr.next;
  });
  return dummy.next;
};
