class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        parentheses = []
        for i in s:
            if((i == "(")or(i=="[")or(i=="{")):
                parentheses.append(i)
            if (i == ")"):
                if(len(parentheses)==0):
                    return False
                if(parentheses.pop()!="("):
                    return False
            if (i=="]"):
                if(len(parentheses)==0):
                    return False
                if(parentheses.pop()!="["):
                    return False
            if (i=="}"):
                if(len(parentheses)==0):
                    return False
                if(parentheses.pop()!="{"):
                    return False
                    
        if(len(parentheses)!=0):
            return False
        return True
