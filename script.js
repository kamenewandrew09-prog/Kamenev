// // 1.
// function byLetter(str) { 
//     if(str === '') return
//     console.log(str[0])
//     byLetter(str.slice(1))
// }

// byLetter('Hello')

// // 2.

// function sumDigits(n) {
//     if(n < 10) {
//         return n 
//     }
//     return (n % 10) + sumDigits(Math.floor(n / 10))
// }

// console.log(sumDigits(1234))

// // 4.

// function findMin(arr) {
//     if(arr.length === 1) {
//         return arr[0]
//     }

//     const restMin = findMin(arr.slice(1))
//     if (arr[0] < restMin) {
//         return arr[0]
//     } return restMin
// }

// console.log(findMin([5,3,8,6]))

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
