public class Solution {
    public bool IsSymmetric(TreeNode root) {
        if(root is null)
            return true;
        return IsMirror(root.left, root.right);
    }
    
    public bool IsMirror(TreeNode tree_1, TreeNode tree_2){
        if(tree_1 is null && tree_2 is null)
                return true;
        if((tree_1 == null && tree_2 != null) || (tree_1 != null && tree_2 == null))
            return false;
        
        if(tree_1.val == tree_2.val)
            return IsMirror(tree_1.left, tree_2.right) && IsMirror(tree_1.right, tree_2.left);   
        else
            return false;
    }
}
