class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        if(n==0):
            return None
        ctr = 0
        for i in range(m+n):
            if (nums1[i] == 0):
                nums1[i] = nums2[ctr]
                ctr+=1
            if(ctr == n):
                break       
        nums1.sort()
