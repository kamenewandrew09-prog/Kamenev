// 1.

const n = Number(prompt("Введіть кількість елементів"))
let arr = []

for(let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random()* 10) + 1)
}

console.log(arr)

const result = arr.reduce((acc, num) => {
  num % 2 === 0 ? acc.even++ : acc.odd++
  return acc 
},{
  even: 0,
  odd: 0
  }
)

console.log(result)

// 2.

const users = [
  { login: "user_1", age: 12 },
  { login: "devMax", age: 19 },
  { login: "codeMaster", age: 17 },
  { login: "frontend_guy", age: 22 },
  { login: "backend_pro", age: 16 },
  { login: "jsNinja", age: 27 },
  { login: "reactFan", age: 14 },
  { login: "nodeHero", age: 31 },
  { login: "fullstack_dev", age: 18 },
  { login: "testerQA", age: 15 }
];

for(let i = 0; i < users.length; i++) {
  users[i].age += 1
}
console.log(users)

const aftermath = users.reduce((storage, user) => {
    user.age >= 18 ? storage.loginOfAdults.push(user.login) : null
    return storage
},{
    loginOfAdults: []
  }
)

console.log(aftermath)

