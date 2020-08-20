/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode DeleteDuplicates(ListNode head) {
        if(head == null)
            return null;
        List<int> integerList = new List<int>();
        ListNode pointer = head;
        while(pointer.next!=null){
            integerList.Add(pointer.val);
            pointer = pointer.next;
        }
        integerList.Add(pointer.val);
        integerList = integerList.Distinct().ToList();
        head = new ListNode(0,null);
        pointer = head;
        integerList.ForEach(delegate(int i){
            pointer.next = new ListNode(i,null);
            pointer = pointer.next;
        });
        
        return head.next;
    }
}
