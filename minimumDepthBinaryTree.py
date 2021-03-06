class Solution(object):
    def minDepth(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if(root is None):
            return 0
        if(root.right is None):
            return self.minDepth(root.left)+1
        if(root.left is None):
            return self.minDepth(root.right)+1
        return min(self.minDepth(root.right), self.minDepth(root.left)) + 1
