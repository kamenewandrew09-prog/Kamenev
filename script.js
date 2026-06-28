new Promise((resolve, reject) => {
    resolve(10)
})
    .then((sum) => {
        return sum + 15
    })
    .then((multiply) => {
        return multiply * 2
    })
    .then((divide) => {
        return divide / 5
    })
    .then((minus) => {
        return minus - 3
    })
    .then((result) => {
        console.log(result)
    })
