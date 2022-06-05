/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */


var threeSum = function(nums) {
    if (!nums.length || (nums.length < 3 && nums[0] === 0)) return []

    const sortedNums = nums.sort((a, b) => a - b)

    const result = []

    sortedNums.forEach((num, idx) => {
       if(num > 0 || num === sortedNums[idx - 1]){
           return 
       } else {
           let left = idx + 1
           let right = sortedNums.length - 1
           let total = num + sortedNums[left] + sortedNums[right]
            while(left < right){
                total = num + sortedNums[left] + sortedNums[right]
                if(total > 0){
                    right --
                } else if (total < 0){
                    left ++
                } else {
                    result.push([num, sortedNums[left], sortedNums[right]])
                    left ++
                    while(sortedNums[left] === sortedNums[left -1] && left < right){
                        console.log(sortedNums[left])
                        left ++
                    }
                }
            }
       } 
    })

    return result
   
};
// @lc code=end

