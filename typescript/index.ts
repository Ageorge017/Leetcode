import { ListNode } from "./classes/ListNode";
import { generateParenthesis } from "./solutions";

function runTestsSingleInput<TestCase, ReturnType>(
  testCases: TestCase[],
  callback: (param: TestCase) => ReturnType
): ReturnType[] {
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

function runTestsMultipleInputs<T, ReturnType>(
  testCases: T[][],
  callback: (...args: T[]) => ReturnType
): ReturnType[] {
  return testCases.map((testCase, index) => {
    console.log(
      `Running test case ${index}.\nInput: ${JSON.stringify(testCase)}`
    );

    const result = callback(...testCase);
    console.log(
      `Output: ${typeof result === "object" ? JSON.stringify(result) : result}`
    );
    console.log(`---------------------------------------------------------`);
    return result;
  });
}

function main() {
  const testCases = [1, 2, 3, 4];

  const results = runTestsSingleInput(testCases, generateParenthesis);
  results.forEach((result, index) => {
    console.log(
      `${index}: ${
        typeof testCases[index] !== "object"
          ? testCases[index]
          : JSON.stringify(testCases[index])
      } --> ${typeof result !== "object" ? result : JSON.stringify(result)}`
    );
  });

  return;
}

main();
