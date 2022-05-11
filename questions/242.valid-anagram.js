/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false
    }
    
    const firstWord = s.split('').sort().join()
    const secondWord = t.split('').sort().join()

    return firstWord === secondWord
};
// @lc code=end

