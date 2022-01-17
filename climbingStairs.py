class Solution:
    def climbStairs(self, n: int) -> int:
        memo = [-1]*(n+1)
        return stairsHelper(n, memo)
def stairsHelper(n, memo):
    if(n == 1 or n == 2 or n == 3):
        return n
    if(memo[n] == -1):
        memo[n] = stairsHelper(n-1, memo)+stairsHelper(n-2, memo)
    return memo[n]
        
