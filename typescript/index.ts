import { createTree } from "./classes/TreeNode";
import { createListNodes, ListNode } from "./classes/ListNode";
import { inorderTraversal as testFunction } from "./solutions";

function runTests<T, S>(testCases: T[], callback: (param: T) => S): S[] {
  return testCases.map((testCase, index) => {
    console.log(
      `Running test case ${index}.\nInput: ${JSON.stringify(testCase)}`
    );
    const result = callback(testCase);
    console.log(`Output: ${result}`);
    console.log(`---------------------------------------------------------`);
    return result;
  });
}

function main() {
  const testCases = [
    [1, null, 2, 3],
    [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9],
  ];

  const nodes = testCases.map((testCase) => createTree(testCase));

  const results = runTests(nodes, testFunction);
  results.forEach((result, index) => {
    console.log(`${index}: ${testCases[index]} --> ${result}`);
  });

  return;
}

main();
