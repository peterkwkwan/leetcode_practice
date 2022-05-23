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
    strs.forEach(word => {
        let sortedWord = word.split('').sort().join('')
        let foundWord = anagramMap.get(sortedWord)
        if(foundWord){
            anagramMap.set(sortedWord, [...foundWord, word])
       
        }else {
            anagramMap.set(sortedWord, [word])
        }
 
    })

    
    anagramMap.forEach((value) => result.push(value))

    return result
};
// @lc code=end

