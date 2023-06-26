function containsDuplicate(nums: number[]): boolean {
  const numsSet = new Set<number>(nums);
  return numsSet.size !== nums.length;
  };
