/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // const result = []

    // const numbersMap = new Map()
    // numbers.forEach((num, idx) => {
    //     numbersMap.set(num, idx)
    // })

    // numbers.forEach((num, idx) => {
    //     const targetFoundIdx = numbersMap.get(target - num)
    //     if(targetFoundIdx && !result.length){
    //         result.push(idx + 1, targetFoundIdx + 1)
    //     }
    // })

    // return result

    let left = 0
    let right = numbers.length - 1

    let total = null

    const result = []
    while(target !== total){
        total = numbers[left] + numbers[right]

        if(target > total){
            left++
        } else if (total > target){
            right--
        } else {
            result.push(left + 1, right + 1)
        }
    }

    return result
};
// @lc code=end

