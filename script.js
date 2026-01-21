// 6. Написати функцію countChar(str, char), яка:
// рахує,
// повертає число
// countChar("banana", "a") // 3

const countChar = (str, char) => {
    let count = 0;

    for(let i = 0; i < str.length; i++) {
        if(str[i] === char) {
            count++
        }

    }   
    return count++;
}

console.log(countChar("banana", "a"));


// const vehicle = {
//     brand: 'Honda',
//     year: 2022,
//     isManual: false,
//     partOfCar: ["wheels", "engine",] 
// }


const players = [
  "Коваленко",
  "Шевчук",
  "Бондар",
  "Мельник",
  "Ткаченко",
  "Поліщук",
  "Романюк",
  "Савченко",
  "Дяченко",
  "Лисенко",
  "Гнатюк"
];

const dnipro = {
  "Коваленко": {
    number: 1,
    goals: 0
  },
  "Шевчук":{
    number: 2,
    goals: 0
  },
  "Бондар":{
    number: 3,
    goals: 0
  },
  "Мельник":{
    number: 4,
    goals: 0
  },
  "Ткаченко":{
    number: 5,
    goals: 0
  },
  "Поліщук":{
    number: 6,
    goals: 0
  },
  "Романюк":{
    number: 7,
    goals: 0
  },
  "Савченко":{
    number: 8,
    goals: 0
  },
  "Дяченко":{
    number: 9,
    goals: 0
  },
  "Лисенко":{
    number: 10,
    goals: 0
  },
  "Гнатюк":{
    number: 11,
    goals: 0
  }, 
}

for(let i = 0; i > players.length; i++) {
  dnipro[players[i]] = i +1
}

console.log(dnipro);



// const student = {
//   id: 101,
//   firstName: "Іван",
//   lastName: "Петренко",
//   age: 19,
//   isActive: true,

//   subjects: ["JavaScript", "HTML", "CSS",],
  
//   address: {
//     city: "Київ",
//     street: "Шевченка",
//     house: 12,
//     apart: null
//   },
  
//   happyBirthday: function() {
//     student.age += 1;
//     console.log(`hb to you, тепер тобі ${student.age}`);
//   },
  
//   printId: function () {
//     console.log(this.id)
//   }
// };

// student.printId()

// student.happyBirthday();
// student.happyBirthday();
// student.happyBirthday();
// student.happyBirthday();

// student.subjects.push("Python")

// console.log(student.subjects)
// console.log(`Привіт! ${student.firstName} ${student.lastName}`)


const first = 'Hello';
const second = 'world';

let aftermath = first + ', ' + second;

console.log(aftermath);
console.log(`${first}, ${second}`)


// let age = +prompt("Введіть ваш вік:")

// if(age >= 0 && age <= 18) {
//   alert("неповнолітній")
// } else if(age >= 19 && age <= 59) {
//   alert("дорослий")
// } else if(age >= 60) {
//   alert("досвічений")
// }

// let number = +prompt("Введіть номер футболіста:")

// if (number <= 1) {
//   alert('голкіпер')
// } else if(number <= 5) {
//   alert('захисник')
// } else if(number <= 9) {
//   alert('півзахисник')
// } else if(number <= 11) {
//   alert('нападник')
// }

// 1. Створіть масив з 3 іменами ['a', 'b', 'c']
let arr = ['a','b','c']

console.log(arr)

// 2. Додайте ще одне в кінець ['a', 'b', 'c', 'd']
arr.push('d')
console.log(arr)

// 3. Виведіть передостаннє (без хардкоду, через length) // 'c'

console.log(arr[arr.length -2])

// 4. Додайте в початок ще одне.  ['e', 'a', 'b', 'c', 'd']

arr.unshift('e')
console.log(arr)

// 5 видаліть за індексом 2 ['e', 'a', 'c', 'd']

arr.splice(2, 1)
console.log(arr)

// 6. знайдіть індекс 'c' та видаліть його  ['e', 'a', 'd']

let index = arr.indexOf('c')
console.log(index)

arr.splice(index, 1)
console.log(arr)

// 7. виведіть циклом кожне окемо
// 'e'
// 'a'
// 'd'

for(let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

// const n = +prompt("Введіть довжину  масиву:");
// const randomArr = []

// for(let i = 0; i < n; i++) {
//   randomArr.push(Math.floor(Math.random() * 10) + 1)
// }

// console.log(randomArr)

// 1. Створіть об’єкт person з властивостями name і age. Додайте метод greet(), який виводить "Привіт, мене звати <name>".

const person = {
  name: "Андрій",
  age: 19,
  
  greet: function() {
    console.log(`Привіт, мене звати ${person.name}`)
  }
}

person.greet()


// 2. Створіть об’єкт rectangle з властивостями width і height.
// Додайте метод area(), який повертає площу прямокутника.

const rectangle = {
  width: 25,
  height: 20,

  area: function() {
    return this.width * this.height
  }
}

console.log(rectangle.area())
// 3. Створіть об’єкт car з властивостями brand і speed. 
// Додайте метод accelerate(value), який збільшує speed на value. Ви його передаєте в метод

const car = {
  brand: "Jeep",
  speed: 150,

  accelerate: function(value) {
    this.speed += value
  },

  showSpeed: function() {
    console.log(this.speed)
  },

  break: function(value) {
    if (this.speed - value < 0) {
      this.speed = 0
    } else {
      this.speed -= value
    }
  }
}

car.accelerate(20)
console.log(car.speed)
car.showSpeed()
car.break(171)
console.log(car.speed)


// 4. Створіть об’єкт student з властивістю grades (масив чисел). Додайте метод showGrades(), 
// який виводить всі оцінки через коми.


const student = {
  grades: [10, 8, 6, 11, 9],

  showGrades: function() {
    const str = this.grades.join(', ')
    console.log(str)
  }
}

student.showGrades()
// 5. Створіть об’єкт user з властивістю password. 
// Додайте метод checkPassword(input), який повертає true, якщо input збігається з password, і false — якщо ні.

const user = {
  password: "1234",

  checkPassword: function(input) {
    if(input === this.password) {
      return true
    }
    return false
  }
}

console.log(user.checkPassword('75483'))
console.log(user.checkPassword('1234'))
// 6. Створіть об’єкт text з властивістю content. 
// Додайте метод capitalize(), який повертає текст із великої літери.

const text = {
  content: "some content",

  capitalize: function() {
    console.log(this.content.toUpperCase())
  }
}

text.capitalize()
// 7. Створіть об’єкт shoppingList з властивістю items (масив). 
// Додайте метод addItem(item), який додає новий елемент у масив.

const shoppingList = {
  items: ['products', 'fruits', 'battery'],

  addItem: function(item) {
    this.items.push(item)
  }
}

shoppingList.addItem('devices')
console.log(shoppingList.items)




// 8.Створіть об’єкт counter з властивістю value. 
// Додайте методи increment() і decrement(), які збільшують або зменшують value на 1.

const counter = {
  value: 20,

  increment: function() {
    console.log(this.value++)
  },

  decrement: function() {
    console.log(this.value--)
  }
}

counter.increment()
counter.increment()
counter.increment()
counter.decrement()
counter.decrement()
counter.decrement()
counter.decrement()


// 9. Створіть об’єкт event з властивістю date (рядок "YYYY-MM-DD"). 
// Додайте метод formatDate(), який повертає дату у вигляді "DD.MM.YYYY".

const event = {
  date: '2006-11-09',

  formatDate: function() {
    const parts = this.date.split('-');
    parts.reverse();                     
    return parts.join('.');
  }
}
console.log(event.formatDate())
// 10. Створіть об’єкт todoList з властивістю tasks (масив). 
// Додайте метод isEmpty(), який повертає true, якщо масив порожній, і false — якщо є завдання.

const todoList = {
  tasks: [],

  isEmpty: function() {
    if(this.tasks.length == 0) {
      return true
    }
    return false
  }
}

console.log(todoList.isEmpty())
todoList.tasks.push("Навчитися JS");
console.log(todoList.isEmpty());













