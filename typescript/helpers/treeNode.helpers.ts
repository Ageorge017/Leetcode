export const constructTreeNodeFromArray = (
  testCases: (number | null)[][]
): TreeNode[] => {
  return testCases.map((testCase) => {
    if (testCase.length === 0) {
      return null;
    }

    const rootNode = new TreeNode(testCase[0]);
    const queue: TreeNode[] = [rootNode];

    let index = 1;
    while (index < testCase.length) {
      const currNode = queue.shift();

      const leftVal = testCase[index];
      if (leftVal !== null) {
        const leftNode = new TreeNode(leftVal);
        currNode.left = leftNode;
        queue.push(leftNode);
      }

      index++;

      const rightVal = testCase[index];
      if (rightVal !== null) {
        const rightNode = new TreeNode(rightVal);
        currNode.right = rightNode;
        queue.push(rightNode);
      }

      index++;
    }

    return rootNode;
  });
};

main();
