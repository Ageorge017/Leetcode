export function threeSum(nums: number[]): number[][] | string[][] {
  const numsLength = nums.length;
  const sumSet: Record<string, number[]> = {};
  if (numsLength === 3)
    return nums.reduce((prev, curr) => prev + curr, 0) ? [] : [nums];
  for (let i = 0; i < numsLength; i++) {
    for (let j = i + 1; j < numsLength; j++) {
      if (i !== j) {
        const [a, b, sum] = [nums[i], nums[j], -nums[i] - nums[j]];
        const hasSum = nums.indexOf(sum);
        if (hasSum >= 0 && !(hasSum === i || hasSum === j)) {
          const key = [a, b, sum].sort();
          const stringKey = key.toString();
          if (!sumSet[stringKey]) sumSet[stringKey] = key;
        }
      }
    }
  }
  return Object.values(sumSet);
}

const runTest = () => {
  const testCases = [
    {
      caseNumber: `test_1`,
      nums: [-1, 0, 1, 2, -1, -4],
    },
    {
      caseNumber: `test_2`,
      nums: [0, 1, 1],
    },
    {
      caseNumber: `test_3`,
      nums: [0, 0, 0],
    },
  ];

  const blah = testCases.map(({ caseNumber, nums }) => {
    return { [`${caseNumber}`]: threeSum(nums) };
  });
  console.log(blah);
};
console.clear();
runTest();
