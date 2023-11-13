class Solution {
    public int removeElement(int[] nums, int val) {
        int lastIndex = nums.length-1;
        int temp = 0;
        int counter = 0;
        if(nums.length == 0)   
            return 0;
        for(int i=nums.length-1; i>=0; i--){
            if(nums[i]==val){
                temp = nums[i];
                nums[i] = nums[lastIndex];
                nums[lastIndex] = temp;
                lastIndex--;
            
            }
        }
        for(int j : nums){
            if(j!=val){
                counter++;
            }
        }
        
        return counter;
    }
}
