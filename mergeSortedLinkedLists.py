# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
            l3 = ListNode(0,None)
            l3_currentPtr = l3
            l2_currentPtr = l2
            l1_currentPtr = l1
            
            while(1):
                if(l2_currentPtr==None):
                    l3_currentPtr.next = l1_currentPtr
                    break
                elif(l1_currentPtr==None):
                    l3_currentPtr.next = l2_currentPtr
                    break
                if(l1_currentPtr.val <= l2_currentPtr.val):
                    l3_currentPtr.next = l1_currentPtr
                    l1_currentPtr = l1_currentPtr.next
                    l3_currentPtr = l3_currentPtr.next
                elif(l1_currentPtr.val>l2_currentPtr.val):
                    l3_currentPtr.next = l2_currentPtr
                    l2_currentPtr = l2_currentPtr.next
                    l3_currentPtr = l3_currentPtr.next
            l3 = l3.next
            return(l3)
                    
