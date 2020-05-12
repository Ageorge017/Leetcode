class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        prefix = ""
        if (len(strs) == 0):
            return ""
        elif (len(strs) == 1):
            return strs[0]
        
        prefix = strs[0]
        for i in range(len(strs)):
            if(i+1<len(strs)):
                compareTo = strs[i+1]
            else:
                return prefix
            prefix = getCommonPrefix(compareTo, prefix)
            #print("After call ",prefix)
def getCommonPrefix(firstWord, secondWord):
    prefix = ""
    #print("first and second word",firstWord,secondWord)
    if((firstWord=="") or (secondWord =="")):
        return ""
    if(len(firstWord)<=len(secondWord)):
        shortWord = firstWord
        longWord = secondWord
    elif(len(firstWord)>len(secondWord)):
        shortWord = secondWord
        longWord = firstWord

    for i in range(len(shortWord)):
        if(shortWord[i]==longWord[i]):
            prefix = shortWord[0:i+1]
        else:
            break;
        #print("iter ",i,prefix)
    #print("returning ", prefix)
    return prefix
