export function getPossibleMoves(row, col, piece) {
    const possibleMoves = []

    switch (piece.toLowerCase()) {
        case 'r' :
            for (let posCol = 0; posCol <= 7; posCol++) {
                if(posCol !== col) {
                    possibleMoves.push({
                        row: row,
                        col: posCol
                    })
                }
            }

            for (let posRow = 0; posRow <= 7; posRow++) {
                if(posRow !== row) {
                    possibleMoves.push({
                        row: posRow,
                        col: col
                    })
                }
            }
            break
        
        case 'b' :
            for (let i = 1; i < 8; i++) {
                let posRow = row - i
                let posCol = col - i
 
                possibleMoves.push({ 
                    row: posRow, 
                    col: posCol 
                })
            }

            for (let i = 1; i < 8; i++) {
                let posRow = row - i
                let posCol = col + i

                possibleMoves.push({ 
                    row: posRow, 
                    col: posCol 
                })
            }

            for (let i = 1; i < 8; i++) {
                let posRow = row + i
                let posCol = col + i

                possibleMoves.push({ 
                    row: posRow, 
                    col: posCol 
                })
            }

            for (let i = 1; i < 8; i++) {
                let posRow = row + i
                let posCol = col - i

                possibleMoves.push({ 
                    row: posRow, 
                    col: posCol 
                })
            }

            break;
    }

    return possibleMoves
}

