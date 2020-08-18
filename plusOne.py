class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        number = 0
        exponent = len(digits)-1
        plusOne = []
        for i in digits:
            number += (i*(10**exponent))
            exponent-=1
        number+=1
        number = str(number)
        for i in number:
            plusOne.append(i)
        
        return plusOne
