/*
 * @lc app=leetcode id=1342 lang=javascript
 *
 * [1342] Number of Steps to Reduce a Number to Zero
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let count = 0

    while(num !== 0){
        if(num % 2 == 0 ){
            num /= 2
        } else {
            num -= 1
        }
        count ++
    }
    return count
    
};
// @lc code=end

