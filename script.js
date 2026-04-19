// // 1.
// const arr = [5, 10, 15];

// const [first, second] = arr
// console.log(first, second)

// // 2.

// const user = {
//   name: "Ivan",
//   age: 25
// };

// const { name: userName } = user;

// console.log(userName); 

// // 3.

// const arr1 = [1, 2, 3, 4];

// const [a, ...others] = arr1

// console.log(a)
// console.log(others)

// // 4.

// const user1 = {
//   name: "Ivan",
//   age: 25,
//   city: "Dnipro"
// };

// const {name, ...rest} = user1

// console.log(name)
// console.log(rest)

// // 5.

// const a1 = [1, 2];
// const b = [3, 4];

// const result = [...a1, ...b]

// console.log(result)

// // 6.

// const user2 = { name: "Ivan" };
// console.log(user2)
// const copy = {...user2}
// console.log(copy)

// // 7.

// const user3 = { 
//   name: "Ivan",
//   age: 25,
//   city: "Dnipro"
// };

// const {city, ...other} = user3;

// const newObj = {...other, country: "Ukraine"};

// console.log(newObj);

// // 8.
// const arr2 = [1, 2, 3];

// const newArr = [0, ...arr2, 4];
// console.log(newArr);


// 9.
const user4 = {
  name: "Ivan",
  address: {
    city: "Dnipro"
  }
};

const { address: { city } } = user4;

console.log(city);

// 10.

const a = [1, 2, 3];
const b = [...a];
console.log(b)

// 11.

const user5 = {
  name: "Ivan",
  age: 25
};

function updateUser(user5) {
  const added =  {...user5, isAdmin: true}
  return added
}

console.log(updateUser(user5))

// 12. 

const arr = [1, 2, 3, 4, 5];

const [first, ...rest] = arr
const lastArr = rest[rest.length - 1]
console.log(first)
console.log(lastArr)







