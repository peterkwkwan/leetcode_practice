/*
 * @lc app=leetcode id=567 lang=javascript
 *
 * [567] Permutation in String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const strLength = s1.length;
    const sortedS1 = s1.split('').sort().join('');

    let result = false;
    for(let i = 0; i <= s2.length - strLength; i++) {
        const tempSortedSubStr = s2.substring(i, i + strLength).split('').sort().join('');
        if (tempSortedSubStr === sortedS1){
            result = true;
            break;
        }
    }

    return result;
};
// @lc code=end

