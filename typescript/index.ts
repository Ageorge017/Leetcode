import { intToRoman } from "./solutions";

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
  const testCases = [3749, 58, 1994, 1, 3999, 500, 900];

  const results = runTests(testCases, intToRoman);
  results.forEach((result, index) => {
    console.log(`${index}: ${testCases[index]} --> ${result}`);
  });

  return;
}

main();
