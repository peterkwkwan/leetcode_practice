/*
 * @lc app=leetcode id=424 lang=javascript
 *
 * [424] Longest Repeating Character Replacement
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    
    let result = 0
    
    const charMap = {}

    let left = 0

    let maxF = 0
    for(let right = 0; right < s.length; right++){
       charMap[s[right]] = (charMap[s[right]] ?? 0 ) + 1
 
       maxF = Math.max(maxF, charMap[s[right]])
       
        while((right - left + 1) - maxF > k){
            charMap[s[left]] -= 1
            left ++
        }

        result = Math.max(result, right - left + 1)
    }

    return result
};
// @lc code=end

