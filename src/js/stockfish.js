export async function getStockfish(fen) {
    const response = await fetch('https://chess-api.com/v1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fen: fen
        })
    })

    const data = await response.json()

    console.log('Stockfish:', data)

    return data
}