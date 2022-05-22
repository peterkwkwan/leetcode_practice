/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const result = []
    const anagramMap = new Map()
    strs.forEach((word, idx) => {
        let sortedWord = word.split('').sort().join()
        let foundWord = anagramMap.get(sortedWord)
        if(foundWord){
            result.push([strs[foundWord], strs[idx]])
            anagramMap.delete(sortedWord)
        }else {
            anagramMap.set(sortedWord, idx)
        }
    })
    for(const [, value] of anagramMap.entries()){
        result.push([strs.value])
    }

    return result
};
// @lc code=end

