import { letterCombinations } from "./solutions";

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
  // const testCases = ["23", "", "2", "9999", "2345"];
  const testCases = ["2345"];

  const results = runTests(testCases, letterCombinations);
  results.forEach((result, index) => {
    console.log(`${index}: ${testCases[index]} --> ${result}`);
  });

  return;
}

main();
