import { TreeNode } from "../classes/TreeNode";

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  //console.log('\n')
  return !root ? 0 : getSum(root, 0, targetSum);
}

const getSum = (
  root: TreeNode | null,
  currentSum: number,
  targetSum: number
) => {
  if (!root) {
    return currentSum === targetSum ? true : false;
  }
  currentSum += root.val;
  if (!root?.left && root?.right)
    return getSum(root?.right, currentSum, targetSum);
  if (!root?.right && root?.left)
    return getSum(root.left, currentSum, targetSum);
  //console.log(`currentSum is ${currentSum}`);
  return (
    getSum(root.left ?? null, currentSum, targetSum) |
    getSum(root.right ?? null, currentSum, targetSum)
  );
};
