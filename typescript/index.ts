import { divide } from "./solutions/integerDivision";

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
    [10, 3],
    [50, 7],
    [-50, 7],
    [-50, -7],
    [50, -7],
    [2, 2],
    [2, -2],
    [1, 100],
    [-1, 100],
    [1, -100],
    [7, -3],
    [-2147483648, 1],
    [-2147483648, -1],
    [2147483648, -1],
    [2147483648, 1],
    [2147483647, 3]
  ];

  const results = runTests(testCases, divide);
  results.forEach((result, index) => {
    console.log(`${index}: ${testCases[index]} --> ${result}`);
  });

  return;
}

main();
