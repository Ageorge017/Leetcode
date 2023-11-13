public class Solution {
    public bool IsPalindrome(int x) {
        
        int reverseNum = 0;
        int lastDigit;
        int y = x;
        
        if(x<0)
            return false;
        
        while(y!=0){
            lastDigit = y%10;
            y = y/10;
            
           reverseNum = (reverseNum*10)+lastDigit; 
        }
        
        //Console.WriteLine(reverseNum);
        if (reverseNum == x)
            return true;
        else
            return false;
    }
}