// 1.
function createDownCounter(start) {
    let counter = start

    return function() {
        const current = counter 
        if(counter > 0) {
            counter--;
        }
        return current;
    }
}

const counter = createDownCounter(3)

console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())

// 2.

function createMemory() {
    let remember; 

    return function(value) {
        if(value !== undefined) {
            remember = value
        }
        return remember
    }
}

const remember = createMemory()
console.log(remember(5))
console.log(remember(10))
console.log(remember())

// 3.

function createToggle() {
    let toggle = false

    return function () {
        toggle = !toggle
        return toggle
    }
}

const toggle = createToggle()
console.log(toggle())
console.log(toggle())
console.log(toggle())
console.log(toggle())

// 4.

function limitCalls(limit) {
    let fn = 0

    return function() {
        if(fn < limit) {
            fn++
            return "ok"
        } else {
            return "limit reached"
        }
    }
}


const fn = limitCalls(3)
console.log(fn())
console.log(fn())
console.log(fn())
console.log(fn())
console.log(fn())

// 5.

function createIdGenerator(id) {
    let nextId = 0
    
    return function() {
        nextId++
        return nextId
    }
}

const nextId = createIdGenerator();
console.log(nextId())
console.log(nextId())
console.log(nextId())