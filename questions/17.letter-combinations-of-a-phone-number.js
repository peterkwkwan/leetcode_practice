/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const digitLetterMap = new Map([
        ['2', ['a', 'b', 'c']],
        ['3', ['d', 'e', 'f']],
        ['4', ['g', 'h', 'i']],
        ['5', ['j', 'k', 'l']],
        ['6', ['m', 'n', 'o']],
        ['7', ['p', 'q', 'r', 's']],
        ['8', ['t', 'u', 'v']],
        ['9', ['w', 'x', 'y', 'z']],
    ])

    const result = []
    
    const backTrackDigits = (idx, currentStr) => {
        if(currentStr.length === digits.length){
            result.push(currentStr)
            return
        }
        for(const letter of digitLetterMap.get(digits[idx])){
            backTrackDigits(idx + 1, currentStr + letter)
        }

    }

    digits && backTrackDigits(0, '') 

    return result
};
// @lc code=end

