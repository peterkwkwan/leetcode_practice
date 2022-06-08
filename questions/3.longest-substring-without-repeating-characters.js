/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let currentString = ''

    let longestCount = 0

    for(let i = 0; i < s.length; i++){
        if(!currentString.includes(s[i])){
            currentString += s[i]
            longestCount = Math.max(currentString.length, longestCount)
        } else {
            currentString += s[i]
            for(let j = 0; j < currentString.length; j++){
                if(currentString[j] === s[i]){
                    currentString = currentString.substring(j + 1, currentString.length)
                    break
                }
            }
        }
    }

    return longestCount

};
// @lc code=end

