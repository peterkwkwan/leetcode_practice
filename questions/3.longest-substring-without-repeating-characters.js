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
    let longestString = ""

    let longestCount = 0

    let splitStringArray = s.split('')

    splitStringArray.forEach((letter, idx) => {
        if (!longestString.includes(letter)){
            longestString += letter
            console.log(longestString)
            longestCount = Math.max(longestString.length, longestCount)
        } else {
            const firstOccurenceIndex = s.indexOf(letter)
            longestString = s.slice(firstOccurenceIndex, idx)
            console.log(longestString)
        }
    })

    return longestCount
};
// @lc code=end

