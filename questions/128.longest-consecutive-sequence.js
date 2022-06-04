/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(!nums.length){
        return 0
    }

    const sortedNums = nums.sort((a, b) => a - b)

    const longestCount = [1]
    let currentLongestCount = 1

    sortedNums.forEach((num, idx) => {
        if (idx === 0) {
            return
        } 

        const isConsecutive = (num === (sortedNums[idx - 1] + 1))
        const isSame = (num === sortedNums[idx - 1])

        if (isConsecutive){
            currentLongestCount ++
        } else if (!isSame) {
            longestCount.push(currentLongestCount)
            currentLongestCount = 1
        } 
        
        if (idx === nums.length - 1){
            longestCount.push(currentLongestCount)
        }
    })

    return Math.max(...longestCount)
};
// @lc code=end

