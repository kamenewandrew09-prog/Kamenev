const someArr = [3, 5, 7, 9,]
someArr.splice(2, 1, 8,)
console.log(someArr)

const someArr1 = [3, 5, 7, 9,]
splicePolyfill(someArr1, 2, 1, 8)
console.log(someArr1);

function splicePolyfill(arr, start, deleted, ...add) {
    let before = arr.slice(0, start)
    let removed = arr.slice(start, start + deleted)
    let after = arr.slice(start + deleted)

    arr.length = 0

    for (let el of before) {
        arr.push(el)
    }

    for (let el of add) {
        arr.push(el)
    }

    for (let el of after) {
        arr.push(el)
    }

    return removed
}


const bubbleArr = [8, 3, 5, 1]

function bubbleSort(arr) {

  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - 1 - i; j++) {
      if(arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }

  return arr
}

console.log(bubbleSort(bubbleArr))