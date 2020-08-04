class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        biggestSum = float('-inf') 
        currentSum = 0
        for i in nums:
            currentSum = max(i, currentSum+i)
            biggestSum = max(biggestSum, currentSum)
        return biggestSum
