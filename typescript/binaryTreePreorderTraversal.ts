class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function preorderTraversal(root: TreeNode | null): number[] {
  const visited: TreeNode[] = [];
  traverse(root, visited);
  return visited.map((node) => node.val);
}

const traverse = (node: TreeNode | null, visited: TreeNode[]) => {
  if (!node) return;

  visited.push(node);
  if (node.left) {
    traverse(node.left, visited);
  }
  if (node.right) {
    traverse(node.right, visited);
  }
  return;
};
