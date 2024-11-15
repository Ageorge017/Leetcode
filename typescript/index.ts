import { ListNode } from "classes/ListNode";
import { maxAreaOptimized as testFunction } from "./solutions";

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
    [1, 8, 6, 2, 5, 4, 8, 3, 7],
    [1, 1],
    [7, 3, 8, 4, 5, 2, 6, 8, 1],
  ];
  const results = runTests(testCases, testFunction);
  results.forEach((result, index) => {
    console.log(`${index}: ${testCases[index]} --> ${result}`);
  });

  return;
}

main();
