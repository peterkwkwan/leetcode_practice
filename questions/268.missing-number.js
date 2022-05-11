/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
        
    const numSet = new Set()
    
    for(let i = 0; i < nums.length; i++){
        numSet.add(nums[i])
    }
    
    let result
    
    for(let i = 0; i <= nums.length; i++){
        if(!numSet.has(i)) result = i
    }
    
    return result
};
// @lc code=end

