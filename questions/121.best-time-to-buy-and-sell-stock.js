/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0
    
    let minPrice = prices[0]

    prices.forEach(price => {
        if(price < minPrice){
            minPrice = price
        } else {
            profit = Math.max(profit, price - minPrice)
        }
    })

    return profit
};
// @lc code=end

