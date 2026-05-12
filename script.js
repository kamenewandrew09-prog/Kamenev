// 1.
function byLetter(str) { 
    if(str === '') return
    console.log(str[0])
    byLetter(str.slice(1))
}

byLetter('Hello')

// 2.

function sumDigits(n) {
    if(n < 10) {
        return n 
    }
    return (n % 10) + sumDigits(Math.floor(n / 10))
}

console.log(sumDigits(1234))


// 3.

function flatten(arr) {
    let result = [];

    for (let el of arr) {
        if (Array.isArray(el)) {
            result = result.concat(flatten(el));
        } else {
            result.push(el);
        }
    }

    return result;
}

console.log(flatten([1, [2, 3], 4]));

// 4.

function findMin(arr) {
    if(arr.length === 1) {
        return arr[0]
    }

    const restMin = findMin(arr.slice(1))
    if (arr[0] < restMin) {
        return arr[0]
    } return restMin
}

console.log(findMin([5,3,8,6]))


// 5.

function countOccurrences(arr, el) {
    if(arr.length === 0) {
        return 0
    }
    if(arr[0] === el) {
        return 1 + countOccurrences(arr.slice(1), el)
    } else {
        return countOccurrences(arr.slice(1), el)
    }
}

console.log(countOccurrences([1,2,4,3,4], 4))

