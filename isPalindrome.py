class Solution:
    def isPalindrome(self, s: str) -> bool:
        whitespaceRemoved = self.removeWhitespace(s)
        nonAlphaNumericRemoved = self.removeNonAlphanumericCharacters(whitespaceRemoved)
        lowercased = self.makeAllLowercase(nonAlphaNumericRemoved)
        reversed = self.reverseString(lowercased)
        
        return lowercased == reversed
        
    def removeWhitespace(self, string: str) -> str:
        return string.replace(" ", "");
    
    def removeNonAlphanumericCharacters(self, string: str) -> str:
        return ''.join(filter(str.isalnum, string))
    
    def makeAllLowercase(self, string: str) -> str:
        return string.lower()  
    
    def reverseString(self, string: str) -> str:
        return string[::-1]
