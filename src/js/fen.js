export function positionToFen(position, halfTurns, fullTurns, turn) {
    let mockup = ''
    let fen = ''
    for (let line of position) {
        mockup += line.join('') + '/'
    }
    mockup = mockup.slice(0, -1);

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

    fen += ` ${turn.toLowerCase()} - - ${halfTurns} ${fullTurns}`
    console.log(fen)

    return fen
}

export function fenToPosition(fen) {

}



