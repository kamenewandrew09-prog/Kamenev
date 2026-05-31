// // 1.
// const animal = {
//     eats: true
// }

// const rabbit = {

// }

// rabbit.__proto__ = animal

// console.log(rabbit.eats)

// // 2.

// const animal1 = {
//     eats: true
// }

// const mammal = {
//     legs: 4
// }

// const dog = {
//     bark() {
//         console.log("Гав")
//     }
// }

// mammal.__proto__ = animal1
// dog.__proto__ = mammal

// console.log(dog.eats)
// console.log(dog.legs)
// dog.bark()

// // 3.
// const user = {
//     age: 20
// };

// const admin = {
//     __proto__: user
// };

// console.log(admin.age); // скорочений запис від admin.__proto__ = user, так само успадковує значення 

// // 4.

// const user1 = {
// age: 20
// };

// const admin1 = {
// __proto__: user1
// };

// admin1.age = 50;

// console.log(admin1.age);
// console.log(user1.age); // admin1.age = 50 створює власне значення age в admin1

// // 5.

// const user2 = {
//     name: 'Іван',

//     show() {
//         console.log(this.name);
//     }
// };

// const admin2 = {
//     __proto__: user2,
//     name: 'Admin'
// };

// admin2.show(); // admin2 успадковує значення юзера де є функція з this.name, тобто він вже шукає this.name в admin2


// // 6.

// function User(name) {
//     this.name = name;
// }

// User.prototype.sayHi = function() {
//     console.log(`I'm ${this.name}`);
// };

// const user3 = new User("Петро");

// user3.sayHi();


// // 7.

// function User1(name) {
//     this.name = name
// }

// User1.prototype.sayHi = function() {
//     console.log(`I'm ${this.name}`)
// }

// const user4 = new User1("Влад")
// const user5 = new User1("Марк")

// console.log(user4.sayHi === user5.sayHi)

// // 8.

// function User2(name) {
//     this.name = name;
// }

// const user6 = new User2("Петро");

// console.log(user6.constructor === User2);

// // 9.
// const arr = [1, 2, 3];

// console.log(arr.__proto__ === Array.prototype);

// // 10.
// const arr1 = [];

// console.log(arr1.push === Array.prototype.push);

// // 11.

// Array.prototype.last = function() {
//     return this[arr2.length - 1]
// }

// const arr2 = [1, 2, 3, 4]

// console.log(arr2.last())




const contextObj = {
    name: 'wqe',
    age: 18,
}

function logData(prop) {
    console.log(`${prop}: ${this[prop]}`);
}


function applyPoly(func, context, args) {
    const tempContext = {...context}
    const tempFunc = Symbol() 
    tempContext[tempFunc] = func;
    return tempContext[tempFunc](...args)
}

applyPoly(logData, contextObj, ["name"])

console.log(contextObj)
