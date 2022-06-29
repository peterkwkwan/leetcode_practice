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
    // const strLength = s1.length;
    // const sortedS1 = s1.split('').sort().join('');

    // let result = false;
    // for(let i = 0; i <= s2.length - strLength; i++) {
    //     const tempSortedSubStr = s2.substring(i, i + strLength).split('').sort().join('');
    //     if (tempSortedSubStr === sortedS1){
    //         result = true;
    //         break;
    //     }
    // }

    // return result;

    // hashmap solution

    if (s1.length > s2.length){
        return false;
    }

    const s1Map = new Map();

    for(let char of s1){
        if(s1Map.has(char)){
         s1Map.set(char, s1Map.get(char) + 1);
        } else {
         s1Map.set(char, 1)
        }
    }
   
    for (let i = 0; i <= s2.length - s1.length; i++){
        const s2Map = new Map();
        for(let j = i; j < i + s1.length; j++){
            const char = s2[j];
            if(s2Map.has(char)){
                s2Map.set(char, s2Map.get(char) + 1);
            } else {
                s2Map.set(char, 1)
            }
        }
        if(s1Map.size === s2Map.size){
            let isSame = true;
            for(let [key, value] of s1Map.entries()){
                if(s2Map.get(key) !== value){
                    isSame = false;
                    break;
                }
            }
            if(isSame){
                return true;
            }
        }
    }
    return false

};
// @lc code=end

