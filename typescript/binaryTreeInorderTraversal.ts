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

function inorderTraversal(root: TreeNode | null): number[] {
  return checkNodes(root, []);
}

const checkNodes = (root: TreeNode | null, visited: number[]): number[] => {
  if (!root) return visited;

  if (!root.left) visited.push(root.val);
  else {
    checkNodes(root.left, visited);
    visited.push(root.val);
  }

  if (!root.right) return visited;
  else checkNodes(root.right, visited);
  return visited;
};

const checkNodesIterative = (root: TreeNode, visited: number[]): number[] => {
  let currentNode = root;
  const traversalList = [root];

  while (1) {
    if (currentNode) {
      if (!currentNode.left) visited.push(currentNode.val);
      else {
        currentNode = currentNode.left;
        traversalList.push(currentNode);
        continue;
      }
      if (currentNode.right) {
        currentNode = currentNode.right;
        continue;
      } else {
        traversalList.pop();
        currentNode = traversalList[traversalList.length - 1];
        visited.push(currentNode.val);
        if (currentNode.right) {
          traversalList.push(currentNode.right);
          currentNode = currentNode.right;
          continue;
        } else {
          traversalList.pop();
        }
      }
    }
    break;
  }
  return visited;
};
