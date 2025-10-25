export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export const createTree = (nums: (number | null)[]): TreeNode | null => {
  if (!nums.length || nums[0] === null) {
    return null;
  }

  const root = new TreeNode(nums[0]!);
  const queue: (TreeNode | null)[] = [root];
  let i = 1;

  while (queue.length > 0 && i < nums.length) {
    const current = queue.shift();

    if (current) {
      // Process left child
      if (i < nums.length && nums[i] !== null) {
        current.left = new TreeNode(nums[i]!);
        queue.push(current.left);
      }
      i++;

      // Process right child
      if (i < nums.length && nums[i] !== null) {
        current.right = new TreeNode(nums[i]!);
        queue.push(current.right);
      }
      i++;
    }
  }

  return root;
};
