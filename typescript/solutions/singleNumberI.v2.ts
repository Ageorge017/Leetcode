const xorNumbersArray = (nums: number[]) =>
  nums.reduce((previousNum, currentNum) => previousNum ^ currentNum);

export function singleNumber(nums: number[]): number {
  return xorNumbersArray(nums);
}
