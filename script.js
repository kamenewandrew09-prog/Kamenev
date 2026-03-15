// 1.
const bigNum = 5.6e6;
console.log(bigNum)

const bigNum1 = 7.8e-5;
console.log(bigNum1)


const bigNum2 = 250e3 + 4e2
console.log(bigNum2)

// 2.

let num = 238;
console.log(num.toString(16))

let num1 = 238;
console.log(num1.toString(2))

let num2 = 238;
console.log(num2.toString(8))

// 3.

const n = parseInt("111", 2)
console.log(n)

const a = parseInt("ff", 16)
console.log(a)

const b = parseInt("77", 8)
console.log(b)

// 4.
console.log(isNaN("asd"))
console.log(Number.isNaN("10"))


// 5.

console.log(parseFloat("12px"))
console.log(parseFloat("100.5em"))
console.log(parseFloat("45.67.89"))

console.log(Number("12px")) // повертає NaN, тому що Number намагається перетворити весь рядок у число.
console.log(parseInt("12px"))

// 6.

let number = -3.4

console.log(Math.floor(number))
console.log(Math.ceil(number))
console.log(Math.trunc(number))

let number1 = 12.34567
console.log(number1.toFixed(2))

// 7.

let input = prompt("Введіть число");

let numb = parseFloat(input)

if(isNaN(numb)) {
    console.log("це не число")
} else {
    console.log(numb.toString(2))
    console.log(numb.toString(16))
    console.log(numb.toFixed(2))
    console.log(Number.isFinite(numb));
}





