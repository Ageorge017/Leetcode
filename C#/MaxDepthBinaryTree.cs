/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public int MaxDepth(TreeNode root) {
        if(root is null)
            return 0;
        return CountDepth(root, 1);
    }
    
    public int CountDepth(TreeNode tree, int depth){
        if(tree.left is null && tree.right is null)
            return depth;
        if(tree.left is null && tree.right != null)
            return CountDepth(tree.right, depth+1);
        if(tree.left != null && tree.right is null)
            return CountDepth(tree.left, depth+1);
        var left = CountDepth(tree.left, depth+1);
        var right = CountDepth(tree.right, depth+1);
        return left>right? left:right;
    }
}
