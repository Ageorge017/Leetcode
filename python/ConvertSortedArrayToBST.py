# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def sortedArrayToBST(self, nums):
        """
        :type nums: List[int]
        :rtype: TreeNode
        """
        return helper(nums)
    
def helper(nums):
    if (len(nums) == 0):
        return None

    midpoint = len(nums)/2
    rootValue = nums[midpoint]        
    right = nums[0:midpoint]
    left = nums[midpoint+1:len(nums)]

    return TreeNode(rootValue, helper(right), helper(left)) 
