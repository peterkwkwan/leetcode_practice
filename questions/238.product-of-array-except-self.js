/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const output = []
    let prefix = 1
    let postfix = 1
    
    for(let i = 0; i < nums.length; i ++){
       output[i] = prefix
       prefix *= nums[i]
    }

   for(let i = nums.length - 1; i >= 0; i--){
       output[i] *= postfix
       postfix *= nums[i]
   }

    return output
};
// @lc code=end

