/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length === 1){
        return false
    }

    const stack = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for(let char of s ) {
        if(map[char]){
            stack.push(char);
        } else {
            if(stack.length === 0){
                return false;
            }
            const lastChar = stack.pop();
            if(map[lastChar] !== char){
                return false;
            }
        }
    }

    if(stack.length !== 0){
        return false
    }
    
    return true;
}
    
// @lc code=end

