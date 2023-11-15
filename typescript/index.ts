import { constructTreeNodeFromArray } from "./helpers/treeNode.helpers";
import { preorderTraversal } from "./solutions/binaryTreePreorderTraversal";

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
  const testCases = [[1, null, 2, 3], [], [1]];

  const results = runTests(
    constructTreeNodeFromArray(testCases),
    preorderTraversal
  );
  results.forEach((result, index) => {
    console.log(`${index}: ${testCases[index]} --> ${result}`);
  });

  return;
}

main();
