public class Solution {
    public int Reverse(int x) {
        int lastDigit;
        int reverseNum = 0;
        
        while(x != 0){
            lastDigit = x%10;
            x = x/10;
            
            try{
                reverseNum = checked((reverseNum * 10) + lastDigit);
            }
            catch{
                reverseNum = 0;
            }
            
            
            //Console.WriteLine(reverseNum);
        }
        return reverseNum;
    }
}