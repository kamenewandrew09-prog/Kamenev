import {initialPosition, pieces_src} from "./constantas.js"
import {getPossibleMoves } from "./moves.js";

const chessboard = document.querySelector('.chessboard');
const turnDOM = document.querySelector('.turn')
const position = initialPosition 

let turn = 'W'
let activeSquare = null
let possibleMoves = []

function drawChessboard () {
    chessboard.innerHTML = ''
    turnDOM.innerHTML = `<img src="${turn === 'W' ? pieces_src.P : pieces_src.p}">`

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.classList.add('square')

            if((row + col) % 2 === 0) { 
                square.classList.add('white')
            } else {
                square.classList.add('black')
            }

            if (possibleMoves.filter(move => row === move.row && col === move.col).length) {
                square.classList.add('possible')
            }

            if (activeSquare && activeSquare.col === col && activeSquare.row === row) {
                square.classList.add('selected')
            }

            square.dataset.row = row;
            square.dataset.col = col;

            const piecesFromPosition = position[row][col]

            square.dataset.piece = piecesFromPosition;

            if (piecesFromPosition !== '.') {
                const piece = document.createElement('img');
                piece.classList.add('piece')
                piece.src = pieces_src[piecesFromPosition]
                square.append(piece)
            }

            square.onclick = () => {
                if (piecesFromPosition !== '.') {

                    const color = piecesFromPosition === piecesFromPosition.toUpperCase()
                     ? 'W' 
                     : 'b'

                    if (turn === color) {

                        square.classList.add('selected')
                        activeSquare = {
                            color: color,
                            squareElt: square,
                            piece: piecesFromPosition,
                            row: row,
                            col: col

                        }
                        possibleMoves = getPossibleMoves(activeSquare, position)
                        drawChessboard()
                    } 

                }

                if (activeSquare) {
                    console.log(row, col)
                    if (possibleMoves.filter(move => row === move.row && col === move.col).length) {
                        position[row][col] = activeSquare.piece
                        position[activeSquare.row][activeSquare.col] = '.'

                        activeSquare = null

                        turn = turn === 'W' ? 'b' : 'W'
                        possibleMoves.length = 0
                    }
                }

                drawChessboard()
            };

            chessboard.append(square)
        }    
    }
}

drawChessboard()

