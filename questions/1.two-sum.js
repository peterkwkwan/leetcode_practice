/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numsMap = {}
    
    const result = []
    
    
    nums.forEach((number, index) => {
        let lookingFor = target - number

        if(lookingFor in numsMap){
            result.push(nums.indexOf(lookingFor), index)
        } else {
            numsMap[number] = number
        }
        if (result.length) return
    })
    
    
    return result
};
// @lc code=end

