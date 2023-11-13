class Solution:
    def countAndSay(self, n: int) -> str:
        return helperFunction(n, 1, "1")
    
    
def helperFunction(n, iteration, output):
    if (n==iteration):
        return output
    else:
        repeat = 1
        newString = ""
        for i in range(len(output)):
            try:
                if(output[i]==output[i+1]):
                    repeat=repeat+1
                else:
                    newString = newString + str(repeat) + output[i]
                    repeat = 1
            except IndexError:
                newString = newString + str(repeat)+ output[i]
    return helperFunction(n,iteration+1, newString)
                    
