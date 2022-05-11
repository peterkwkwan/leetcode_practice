/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let result = true
    
    const hasDuplicate = (section) => {
        const filteredSection = section.filter(value => value !== '.')
        const set = new Set(filteredSection)
        return set.size !== filteredSection.length
    }
    
    board.forEach((section, index) => {
        if(hasDuplicate(section)) {
            result = false
        }
    })

    if(!result) return false
    
    

    // columns checking
    
    const columns = []
    for(let i = 0; i < 9; i ++){
        columns.push([])
    }

    board.forEach(section => {
        section.forEach((number, idx2 )=> {
            columns[idx2].push(number)
        })
    })
    
    columns.forEach(section => {
        if(hasDuplicate(section)) {
            result = false
        }    
    })
    
    if(!result) return false


    
    
    // box checking
    const box = []
    for(let i = 0; i < 9; i ++){
        box.push([])
    }
    
    
    for(let b = 0; b < 9; b++){
        if (b === 0 || b === 3 || b === 6){

            for(let i = 0; i < 3; i++){
                if( b == 0){
                    for(let j = 0; j < 3; j++){
                        box[b].push(board[i][j])
                    }
                } else if (b === 3){
                    for(let j = 3; j < 6; j++){
                        box[b].push(board[i][j])
                    }
                } else  {
                    for(let j = 6; j < 9; j++){
                        box[b].push(board[i][j])
                    }
                }
              
            }
        } else if (b === 1 || b === 4 || b === 7) {
            for(let i = 3; i < 6; i++){
                if( b == 1){
                    for(let j = 0; j < 3; j++){
                        box[b].push(board[i][j])
                    }
                } else if (b === 4){
                    for(let j = 3; j < 6; j++){
                        box[b].push(board[i][j])
                    }
                } else  {
                    for(let j = 6; j < 9; j++){
                        box[b].push(board[i][j])
                    }
                }
            }
            
        } else {
             for(let i = 6; i < 9; i++){
                if( b == 2){
                    for(let j = 0; j < 3; j++){
                        box[b].push(board[i][j])
                    }
                } else if (b === 5){
                    for(let j = 3; j < 6; j++){
                        box[b].push(board[i][j])
                    }
                } else  {
                    for(let j = 6; j < 9; j++){
                        box[b].push(board[i][j])
                    }
                }
            }
        }
     
    }    
    
    box.forEach(section => {
        if(hasDuplicate(section)) {
            result = false
        }    
    })

    return result
};
// @lc code=end

