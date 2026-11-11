export function positionToFen(position, halfTurns, fullTurns, turn) {
    let mockup = ''
    let fen = ''
    for (let line of position) {
        mockup += line.join('') + '/'
    }
    let numberOfDots = 0;
    for (let i = 0; i < mockup.length; i++) {
        if (mockup[i] !== '.') {
            if (numberOfDots > 0) {
                fen += `${numberOfDots}`
                numberOfDots = 0;
            }
            fen += mockup[i];
        } else {
            numberOfDots += 1;
        }
    }

    console.log(fen)
}

export function fenToPosition(fen) {

}