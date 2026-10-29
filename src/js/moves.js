export function getPossibleMoves(activeSquare, position) {
    const {row, col, piece, color} = activeSquare
    const possibleMoves = []

    function addFillSquareToPossibleMoves(fillRow, fillCol) {
        const piecesFromPosition = position[fillRow][fillCol]
        if(
            (color === 'W' && piecesFromPosition.toUpperCase() !== piecesFromPosition)
            ||
            (color === 'b' && piecesFromPosition.toLowerCase() !== piecesFromPosition)
        ) {
            possibleMoves.push({row: fillRow, col: fillCol})
        }
    }

    function getRookMoves(row, col, position, possibleMoves) {
        for (let possibleRow = row + 1; possibleRow <= 7; possibleRow++) {
            if (position[possibleRow][col] !== '.') {
                addFillSquareToPossibleMoves(possibleRow, col);

                break
            }
            possibleMoves.push({row: possibleRow, col: col})
        }


        for (let possibleRow = row - 1; possibleRow >= 0; possibleRow--) {
            if (position[possibleRow][col] !== '.') {
                addFillSquareToPossibleMoves(possibleRow, col);

                break
            }
            possibleMoves.push({row: possibleRow, col: col})
        }

        for (let possibleCol = col + 1; possibleCol <= 7; possibleCol++) {
            if (position[row][possibleCol] !== '.') {    
                addFillSquareToPossibleMoves(row, possibleCol);
                    
                break
            } 
            possibleMoves.push({row: row, col: possibleCol})
        }

        for (let possibleCol = col - 1; possibleCol >= 0; possibleCol--) {
            if (position[row][possibleCol] !== '.') {     
                addFillSquareToPossibleMoves(row, possibleCol);
                    
                break
            } 
            possibleMoves.push({row: row, col: possibleCol})
        }
    }

    function getBishopMoves(row, col, position, possibleMoves) {
        for (let i = 1; row + i <= 7 && col + i <= 7; i++) {
            let possibleRow = row + i
            let possibleCol = col + i

            if (position[possibleRow][possibleCol] !== '.') {
                addFillSquareToPossibleMoves(possibleRow, possibleCol)
                break
            }

            possibleMoves.push({row: possibleRow, col: possibleCol})
        }

        for (let i = 1; row + i <= 7 && col - i >= 0; i++) {
            let possibleRow = row + i
            let possibleCol = col - i

            if (position[possibleRow][possibleCol] !== '.') {
                addFillSquareToPossibleMoves(possibleRow, possibleCol)
                break
            }

            possibleMoves.push({row: possibleRow, col: possibleCol})
        }

        for (let i = 1; row - i >= 0 && col - i >= 0; i++) {
            let possibleRow = row - i
            let possibleCol = col - i

            if (position[possibleRow][possibleCol] !== '.') {
                addFillSquareToPossibleMoves(possibleRow, possibleCol)
                break
            }

            possibleMoves.push({row: possibleRow, col: possibleCol})
        }

        for (let i = 1; row - i >= 0 && col + i <= 7; i++) {
            let possibleRow = row - i
            let possibleCol = col + i

            if (position[possibleRow][possibleCol] !== '.') {
                addFillSquareToPossibleMoves(possibleRow, possibleCol)
                break
            }

            possibleMoves.push({row: possibleRow, col: possibleCol})
        }
    }

    function getKingMoves(row, col, position, possibleMoves) {
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {

                if (i !== 0 || j !== 0) {
                    let possibleRow = row + i
                    let possibleCol = col + j

                    if (
                        possibleRow >= 0 && possibleRow <= 7 &&
                        possibleCol >= 0 && possibleCol <= 7
                    ) {
                        if (position[possibleRow][possibleCol] === '.') {
                            possibleMoves.push({row: possibleRow, col: possibleCol})
                        } else {
                            addFillSquareToPossibleMoves(possibleRow, possibleCol)
                        }
                    }
                }
            }
        }
    }

    switch (piece.toLowerCase()) {
        case 'r' :
            getRookMoves(row, col, position, possibleMoves)

            break
        
        case 'b' :
            getBishopMoves(row, col, position, possibleMoves)

            break

        case 'q' :
            getRookMoves(row, col, position, possibleMoves)
            getBishopMoves(row, col, position, possibleMoves)

            break
        case 'k' :
            getKingMoves(row, col, position, possibleMoves)

            break
    }

    return possibleMoves
}

