export function maxProfit(prices: number[]): number {
  var minPrice: number = 10001;
  var maxProfit: number = 0;
  var i: number;

  for (i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) minPrice = prices[i];
    else if (prices[i] - minPrice > maxProfit) maxProfit = prices[i] - minPrice;
  }
  return maxProfit;
}
