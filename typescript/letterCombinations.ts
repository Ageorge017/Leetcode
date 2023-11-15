export function letterCombinationsHelper(
  nextLetterGroupLists: string[][],
  letter = ""
): string[] {
  if (nextLetterGroupLists.length === 0) {
    return [letter];
  }
  const currentLetterGroup = nextLetterGroupLists.shift();

  return [
    letter +
    letterCombinationsHelper(nextLetterGroupLists, currentLetterGroup[0])[0] +
    letter +
    letterCombinationsHelper(nextLetterGroupLists, currentLetterGroup[1])[0] +
    letter +
    letterCombinationsHelper(nextLetterGroupLists, currentLetterGroup[2])[0] +
    currentLetterGroup[3]
      ? letter +
        letterCombinationsHelper(nextLetterGroupLists, currentLetterGroup[3])[0]
      : null,
  ];
}

function letterCombinations(digits: string): string[] {
  const numberLetterMap: Record<number, string[]> = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["h", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  const numberKey = [...digits];
  const chosenGroups = numberKey.map<string[]>((key) => numberLetterMap[key]);
  return letterCombinationsHelper(chosenGroups);
}

const runTest = () => {
  const testCases = [
    {
      caseNumber: `test_1`,
      digits: "23",
    },
    {
      caseNumber: `test_2`,
      digits: "",
    },
    {
      caseNumber: `test_3`,
      digits: "2",
    },
  ];

  const blah = testCases.map(({ caseNumber, digits }) => {
    return { [`${caseNumber}`]: letterCombinations(digits) };
  });
  console.log(blah);
};
console.clear();
runTest();
