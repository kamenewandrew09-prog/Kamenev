замінити всі парні елементи на настумні непарні методом splice()


const myArr = [2 ,6, 8, 11]

for (let i = 0; i < myArr.length; i++) {

  if (myArr[i] % 2 === 0) {
    myArr.splice(i, 1, myArr[i] + 1);
  }

}

console.log(myArr);

const arr = ["HTML", "CSS", "React"];

arr.splice(2, 0, "JS");

console.log(arr);




const myArr = [1, 3, 2];

myArr.push(5);
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.unshift(5);
console.log(myArr);

myArr.shift();
console.log(myArr);

//         починаю  скільки  чим замінити
const deleted = myArr.splice(1,      2,         67,68,69,300);
console.log(myArr);

const arr = ["HTML", "CSS", "React"];

arr.splice(-1, 0, "JS");
console.log(arr);

function polySlice(arr, start, stop) {
    const result = []

    for(let i = start; i < stop; i++) {
        result.push(arr[i])
    }
    return result
}

console.log(polySlice([1, 3, 2, 5, 7], 1, 4));


const myArr = [1, 3, 2, 4, 6, 7];

const squares = []

myArr.forEach((el) => {
    squares.push((el * el))

})

console.log(squares)


const words = ["cat", "house", "tree", "elephant"];

console.log(words.find(word => word.length > 4));

// const users = [
//   { name: "Ivan", age: 18 },
//   { name: "Anna", age: 25 },
//   { name: "Oleg", age: 30 }
// ];

// const user25 = users.find(user => user.age === 25)
// console.log(user25?.name)

const users = [
  { name: "Ivan", age: 18 },
  { name: "Anna", age: 25 },
  { name: "Oleg", age: 30 },
  { name: "Petro", age: 22 },
  { name: "Maria", age: 19 },
  { name: "Olena", age: 27 },
  { name: "Andrii", age: 24 },
  { name: "Dmytro", age: 31 },
  { name: "Svitlana", age: 28 },
  { name: "Serhii", age: 21 },
  { name: "Kateryna", age: 26 },
  { name: "Roman", age: 29 },
  { name: "Natalia", age: 23 }
];

console.log(users.filter(user => user.name.indexOf('o') !== -1 || user.name.indexOf('O') !== -1))

console.log(users.filter(user => user.name.toLowerCase().includes('an')))

const users1 = [
  { name: "Ivan", age: 18 },
  { name: "Anna", age: 25 },
  { name: "Oleg", age: 30 },
  { name: "Petro", age: 22 },
  { name: "Maria", age: 19 },
  { name: "Olena", age: 27 },
  { name: "Andrii", age: 24 },
  { name: "Dmytro", age: 31 },
  { name: "Svitlana", age: 28 },
  { name: "Serhii", age: 21 },
  { name: "Kateryna", age: 26 },
  { name: "Roman", age: 29 },
  { name: "Natalia", age: 23 }
];

const names = users1.map(user => user.name);
console.log(names);

const arr = users1.filter(user => user.age > 25).map(user => user.name)
console.log(arr)


const numbers = [1, 12, 5, 10, 9, 41]

numbers.sort( (first, second) => {
    if (first > second) {
        return 1
    } else if (first < second){
        return -1
    }
    return 0
})

numbers.sort( (first, second) => (second - first) )



console.log(numbers);