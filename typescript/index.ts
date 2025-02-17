import { threeSumClosest } from "./solutions";

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
    console.log(`Output: ${result}`);
    console.log(`---------------------------------------------------------`);
    return result;
  });
}

function main() {
  // const testCases = [[23, 2, 9999, 2345]];
  const testCases = [
    [[-1, 1, -4, 2], 2],
    [[0, 0, 0], 0],
  ];

  const results = runTestsMultipleInputs(testCases, threeSumClosest);
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
