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













