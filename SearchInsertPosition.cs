public class Solution {
    public int SearchInsert(int[] nums, int target) {
        bool roundNotFound = true;
        int arrayLen = nums.Length;
        if(arrayLen == 0){
            return 0;
        }
        int lowerBound = 0;
        int upperBound = arrayLen-1;
        int middle; 
        
        while(true){
            middle = lowerBound+upperBound/2;
            if(nums[middle]>target){
                upperBound = middle;
            }
            else if(nums[middle]<target){
                lowerBound = middle;
            }
            if(nums[middle]==target)
                return middle;
            /*if(upperBound-lowerBound == 1){
                
            } */               
        }
        return 0;
    }
}
