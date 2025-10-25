import { createTree } from "./classes/TreeNode";
import { createListNodes } from "./classes/ListNode";
import { inorderTraversal as testFunction } from "./solutions";
import testConfig from "test.config";

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
  const { inputs, isLinkedList, isTree } = testConfig;

  const testCases = inputs.map((testCase) => {
    return isTree
      ? createTree(testCase)
      : isLinkedList
      ? createListNodes(testCase)
      : inputs;
  });

  const results = runTests(testCases, testFunction);
  results.forEach((result, index) => {
    console.log(`${index}: ${inputs[index]} --> ${result}`);
  });

  return;
}

main();
