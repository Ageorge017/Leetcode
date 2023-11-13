class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        carry = 1
        index = len(digits)-1
        while(index>=0):
            number=(digits[index]+carry)%10
            carry = (digits[index]+carry)//10
            digits[index]=number
            index-=1 
        if(carry>0):
            digits.insert(0,carry)
        return digits
