import { preorderTraversal } from "./binaryTreePreorderTraversal";
import { TreeNode } from "./classes/TreeNode";

function runTests<T, S>(testCases: T[], callback: (param: T) => S): S[] {
  return testCases.map((testCase, index) => {
    console.log(`Running test case ${index}.\nInput: ${testCase}`);
    const result = callback(testCase);
    console.log(`Output: ${result}`);
    console.log(`---------------------------------------------------------`);
    return result;
  });
}

function main() {
  const testCases: TreeNode[] = [];
  const results = runTests(testCases, preorderTraversal);
  results.forEach((result, index) => {
    console.log(`${index}: ${testCases[index]} --> ${result}`);
  });

  return;
}
