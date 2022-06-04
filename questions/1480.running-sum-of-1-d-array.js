/*
 * @lc app=leetcode id=1480 lang=javascript
 *
 * [1480] Running Sum of 1d Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    
    const result = []
    nums.forEach((num, idx) => {
        if(result.length > 0){
            result.push(num + result[idx - 1])
        } else {
            result.push(num)
        }
    })
    return result
};
// @lc code=end

