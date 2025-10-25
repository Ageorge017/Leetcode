export function missingNumber(nums: number[]): number {
  const setLen = nums.length + 1;
  const set = new Set(nums);
  console.log(set.has);
  for (let i = 0; i < setLen; i++) {
    if (!set[i]) return i;
  }
}
