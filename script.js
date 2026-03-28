// 1.
const users = [
{ name: "Ivan", age: 18 },
{ name: "Anna", age: 25 },
{ name: "Oleg", age: 30 },
{ name: "Olena", age: 22 },
{ name: "Dmytro", age: 27 }
];

let remainingUsers = [...users];

function getRandomUser() {
  if (remainingUsers.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * remainingUsers.length);
  const user = remainingUsers[randomIndex];
  remainingUsers.splice(randomIndex, 1);
  return user;
}

for (let i = 0; i < 6; i++) {
  console.log(getRandomUser());
}

// 2.

console.log(users.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  } else {
    return 0;
  }
}));

// 3.
const str = "2026-03-18";

const arrPart = str.split('-')

const datePart = arrPart.reverse()

const newStr = datePart.join('.')
console.log(newStr)

// 4.

const someStr = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
const splited = someStr.split('')
const result = splited.map(letter => letter === 'o' ? '$$$' : letter)
const someStr2 = result.join('')

console.log(someStr2)

// 5.

const numbers = [5, 10, 15, 20];

const aftermath = numbers.reduce((sum, oddEl) => {
    return oddEl % 2 !== 0 ? sum + oddEl : sum
}, 0)

console.log(aftermath) 

// 6. 

const users1 = [
{ name: "Ivan", age: 18 },
{ name: "Anna", age: 25 },
{ name: "Oleg", age: 30 },
{ name: "Olena", age: 22 },
{ name: "Petro", age: 17 }
];