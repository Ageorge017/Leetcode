public class Solution {
    public int SearchInsert(int[] nums, int target) {
        int arrayLen = nums.Length;
        if(arrayLen == 0){
            return 0;
        }
        int lowerBound = 0;
        int upperBound = arrayLen-1;
        int i = 0; 
        
       
        if(target > nums[upperBound]){
            return upperBound+1;
        }
        else if(target <= nums[lowerBound]){
            return lowerBound;
        }
        
        while(i<arrayLen){
            if(nums[i]==target){
                return i;
            }
            else if((nums[i]<target)&&(target<nums[i+1])){
                return i+1;
            }
            i++;
        }
        
        return 0;
    }
}