function maxProfit(prices: number[]): number {
    var i:number = 0;
    var valley:number = prices[0];
    var peak:number = prices[0];
    var maxProfit:number = 0;
    
    while(i<prices.length -1){
        while(i<prices.length-1 && prices[i] >= prices[i+1])
            i++;
        valley = prices[i];
        while (i <prices.length -1 && prices[i]<= prices[i+1])
            i++;
        peak = prices[i];
        maxProfit += peak - valley;
    }
    
    return maxProfit;
};
