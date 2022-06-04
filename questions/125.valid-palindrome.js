/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const validString = s.replace(/[^0-9a-z]/gi, '').toLowerCase()

    for(let i = 0; i <= validString.length / 2 - 1; i ++){
        for(let j = validString.length - 1; j > i; j --){
            if(validString[j] !== validString[i]){
                return false
            }
            i++;
        }
    }
    return true
};
// @lc code=end

