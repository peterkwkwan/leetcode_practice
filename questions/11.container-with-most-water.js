/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1

    let result = 0
  
    // brute force

    // height.forEach((left, idx) => {
    //     for(let right = idx + 1; right <= height.length - 1; right++ ){
    //         const width = right - idx
    //         const area = Math.min(height[right], left) * width
    //         if(area > result) result = area
    //     }
    // })

    while (left < right){
        let area = (right - left) * Math.min(height[right], height[left])
        result = Math.max(result, area)

        if(height[left] < height[right]){
            left++
        } else {
            right--
        }
    }
    
    return result

};
// @lc code=end

