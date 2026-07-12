function firstProm() {
    return new Promise((resolve) => {
        const arr = [];
        setTimeout(() => {
            const random = Math.floor(Math.random() * 5) + 1
            arr.push(`1: ${random}`)
            return resolve(arr)
        }, 3000)
    })   
}

function secondProm(arr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const random = Math.floor(Math.random() * 5) + 6
            arr.push(`2: ${random}`)
            return resolve(arr)
        },2000)      
    })
}


function thirdProm(arr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const random = Math.floor(Math.random() * 5) + 11
            arr.push(`3: ${random}`)
            return resolve(arr)
        },1000)      
    })
}
        


function dom(arr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let html = ''

            arr.forEach(item => {
                html += `<li>${item}</li>`
            })

            document.body.insertAdjacentHTML('beforeend', `<ol>${html}</ol>`)
            return resolve()
        }, 2000)
    })   
}

async function result() {
    let arr = await firstProm()
    arr = await secondProm(arr)
    arr = await thirdProm(arr)
    await dom(arr)
}

result()

