new Promise((resolve) => {
    const arr = [];
    setTimeout(() => {
        const random = Math.floor(Math.random() * 5) + 1
        arr.push(`1: ${random}`)
        resolve(arr)
    }, 3000)
})

    .then(arr => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const random = Math.floor(Math.random() * 5) + 6
                arr.push(`2: ${random}`)
                resolve(arr)
            },2000)      
        })
    })

    .then(arr => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const random = Math.floor(Math.random() * 5) + 11
                arr.push(`3: ${random}`)
                resolve(arr)
            },1000)      
        })
    })

    .then(arr => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let html = ''

                arr.forEach(item => {
                    html += `<li>${item}</li>`
                })

                document.body.insertAdjacentHTML('beforeend', `<ol>${html}</ol>`)
                resolve();
            }, 2000)
        })
    })
