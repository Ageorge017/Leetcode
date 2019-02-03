public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        int[] sum = new int[2];
        int i, j;
        for (i = 0; i<nums.Length; i++){
            for(j = i+1; j< nums.Length; j++){
                if(nums[j]+nums[i]==target){
                    sum[0] = i;
                    sum[1] = j;
                    return sum;
                }
            }
        }
        return null;
    }
}
