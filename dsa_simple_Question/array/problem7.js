/*
 Best Time to Buy and Sell Stocks

You are given an array prices where prices[i] denotes the price of a stock on the ith day. You want to maximize the profit by buying a stock and then selling it at a higher price.

Suppose you can make a single buy and single sell at any date after you buy, what is the maximum profit that you can make?

Note: Return 0 if you cannot make a profit.

Examples
prices: [6, 1, 4, 2, 5, 3]
Answer: 4

Explanation
Buy on day 2 (price: 1) and Sell on day 5 (price: 5).
Profit: 5 - 1 = 4.
*/

function maxProfit(prices) {
    if (prices.length === 0) return 0; // Edge case: Empty array

    let minPrice = prices[0]; // Track minimum price to buy
    let maxProfit = 0; // Track maximum profit

    for (let i = 1; i < prices.length; i++) {
        // Check if we get a higher profit by selling at current price
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        
        // Update the minimum price if a lower price is found
        minPrice = Math.min(minPrice, prices[i]);
    }

    return maxProfit;
}

// Example usage:
console.log(maxProfit([6, 1, 4, 2, 5, 3])); // Output: 4
