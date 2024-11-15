import { ListNode } from "classes/ListNode";

export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if(head === null) return head;
    
    let counter = 1;
    let currentNode = head;

    while (counter <= 30) {
        if(currentNode.next === null) break;

        counter++;
        currentNode = currentNode.next;
    }

    currentNode = head;

    let newHead: ListNode;
    if(counter === n) {
        newHead = currentNode.next;
        currentNode = newHead.next;
        counter--;
    }

    let newCurrent = newHead;

    while(counter > 0) {
        if(counter !== n){
            newCurrent.next = currentNode
        }
        counter--;
    }

    return newHead;
}
