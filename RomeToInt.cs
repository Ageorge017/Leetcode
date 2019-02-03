public class Solution {
    public int RomanToInt(string s) {
        IDictionary<char, int> RomanToNum = new Dictionary<char, int>(){{'M', 1000}, {'D', 500}, {'C', 100},
                                                                          {'L', 50}, {'X', 10},{'I', 1}, {'V', 5}};
        Stack<char> RomeNums = new Stack<char>();
        int sum = 0;
        char c, d;
        
        foreach (char Num in s){
            RomeNums.Push(Num);
        }
    
        
        while(RomeNums.Count!=0){
            c = RomeNums.Pop();
            sum = sum + RomanToNum[c];
            
            if(RomeNums.Count !=0){
               d = RomeNums.Peek(); 
               if(RomanToNum[d]<RomanToNum[c]){
                   sum = sum - RomanToNum[d];
                   RomeNums.Pop();
               }
               
            }
            
        }
        return sum;
    }
}
