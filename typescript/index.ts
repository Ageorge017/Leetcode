import { ListNode } from "./classes/ListNode";
import { removeNthFromEnd } from "./solutions";

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

function createListNode(values: number[]): ListNode {
  if (values.length === 0) return null;

  const head = new ListNode(values[0], null);
  let current = head;
  values.shift();

  if (values.length === 0) return head;

  values.forEach((value, index) => {
    const newNode = new ListNode(value, null);
    current.next = newNode;
    current = newNode;
  }, head);

  return head;
}

function main() {
  const testCases = [
    [createListNode([1, 2, 3, 4, 5]), 2],
    [createListNode([1]), 1],
    [createListNode([1, 2]), 1],
    [createListNode([1, 2, 3, 4, 5]), 5],
    [createListNode([1, 2, 3, 4, 5]), 1],
  ];

  const results = runTestsMultipleInputs(testCases, removeNthFromEnd);
  results.forEach((result, index) => {
    if (typeof testCases[index] !== "object")
      console.log(`${index}: ${testCases[index]} --> ${result}`);
    else {
      console.log(
        `${index}: ${JSON.stringify(testCases[index])} --> ${result}`
      );
    }
  });

  return;
}

main();
