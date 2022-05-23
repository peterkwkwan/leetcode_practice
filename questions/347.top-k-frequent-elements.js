/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    const numsMap = new Map()
    
    nums.forEach(num => {
        let foundNum = numsMap.get(num)
        if(foundNum) {
            numsMap.set(num, foundNum += 1)
        } else {
            numsMap.set(num, 1)
        }
    })

    const result = []

    const sortedArr = [...numsMap.entries()].sort((a, b) => b[1] - a[1])

    sortedArr.forEach((el, idx) => {
        if(!(idx > k -1)){
            result.push(el[0])
        } else {
            return
        }
    })
    
    return result;
};
// @lc code=end

