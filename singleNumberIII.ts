type NumberInstances = Record<string, number>;

const countNumberInstances = (nums: number[]): NumberInstances => {
  let numberCount: NumberInstances = {};
  nums.forEach((num) => {
    if (numberCount[num] === undefined) numberCount[num] = 1;
    else numberCount[num] += 1;
  });
  return numberCount;
};

const findSingleNumbersInstance = (counts: NumberInstances): string[] => {
  const allNumbers = Object.keys(counts);
  const singleKey = allNumbers.filter((value) => counts[value] === 1);
  return singleKey;
};

function singleNumber(nums: number[]): string[] | number[] {
  if (nums.length === 2) return nums;
  const numberCounts = countNumberInstances(nums);
  return findSingleNumbersInstance(numberCounts);
}
