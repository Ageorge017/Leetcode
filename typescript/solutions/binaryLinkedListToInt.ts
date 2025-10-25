import { ListNode } from "classes/ListNode";

export function getDecimalValue(head: ListNode | null): number {
    const numArray: number[] = [];

    while(head){
        numArray.push(head.val);
        head = head.next
    }
    const binStr = numArray.join("")

    return parseInt(binStr, 2)
};