import { mergeAlternately } from "./solutions/mergeStringsAlternatively";

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
    ["abc", "pqr"],
    ["ab", "pqrs"],
    ["abcd", "pq"],
    ["a", "p"],
  ];

  const results = runTests(testCases, mergeAlternately);
  results.forEach((result, index) => {
    console.log(`${index}: ${testCases[index]} --> ${result}`);
  });

  return;
}

main();
