/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0
    
    for(let char of n.toString(2)){
        char === '1' && count ++    
    }
    
    return count
    
};
// @lc code=end

