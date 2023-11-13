class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        stringList = s.split(" ")
        print(stringList)
        for i in stringList[::-1]:
            if (i!=""):
                return len(i)
        return 0
