function bulka(burgerArr, callbackFn) {

    setTimeout(() => {
        console.log("булочка розігріта");
        burgerArr.push("булочка")
        callbackFn(burgerArr)
    }, 2000)
}

function kotleta(burgerArr, callbackFn) {
   
    setTimeout(() => {
        console.log("котлета посмажена");
        burgerArr.push("котлета")
        callbackFn(burgerArr)
    }, 2500)
}

function lettuce(burgerArr, callbackFn) {
   
    setTimeout(() => {
        console.log("поклали листя салату");
        burgerArr.push("листя салату")
        callbackFn(burgerArr)
    }, 3000)
}

function cheese(burgerArr, callbackFn) {
   
    setTimeout(() => {
        console.log("ломтик сиру");
        burgerArr.push("сир")
        callbackFn(burgerArr)
    }, 3500)
}

function sauce(burgerArr, callbackFn) {
   
    setTimeout(() => {
        console.log("смазали соусом");
        burgerArr.push("соус")
        callbackFn(burgerArr)
    }, 4000)
}

function zbirka(burgerArr, callbackFn) {

    setTimeout(() => {
        console.log("бургер зібраний " + burgerArr);
        callbackFn(burgerArr);
    }, 1000)
}


new Promise((resolve) => {
    const burgerArr = []
    bulka(burgerArr, resolve);
   
})
   .then(burgerArr => {
        return new Promise(resolve => {
            kotleta(burgerArr, resolve);
        })
    })
    .then(burgerArr => {
        return new Promise(resolve => {
            lettuce(burgerArr, resolve);
        })
    })
    .then(burgerArr => {
        return new Promise(resolve => {
            cheese(burgerArr, resolve);
        })
    })
    .then(burgerArr => {
        return new Promise(resolve => {
            sauce(burgerArr, resolve);
        })
    })
    .then(burgerArr => {
        return new Promise(resolve => {
            zbirka(burgerArr, resolve);
        })
    })
    .then(result => {
        console.log(result)
        console.log("ГОТОВО");
    })