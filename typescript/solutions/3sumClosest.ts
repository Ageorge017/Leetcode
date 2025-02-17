export function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let closest = Infinity;
  let minDiff = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      const diff = Math.abs(sum - target);

      if (diff < minDiff) {
        minDiff = diff;
        closest = sum;
      }

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return sum;
      }
    }
  }

  return closest;
}
